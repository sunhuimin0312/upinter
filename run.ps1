$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Write-Host "Root directory: $root"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8081/')
$listener.Start()
Write-Host "Server running at http://localhost:8081/"
Write-Host "Press Ctrl+C to stop"
while ($listener.IsListening) {
    try {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response
        $rawPath = $req.Url.LocalPath
        $path = [System.Uri]::UnescapeDataString($rawPath)
        Write-Host "Request: $path"
        if ($path -eq '/' -or $path -eq '') { $path = '/index.html' }
        $file = Join-Path $root $path.TrimStart('/','\')
        Write-Host "Resolved to: $file"
        if (Test-Path $file -PathType Leaf) {
            $ext = [IO.Path]::GetExtension($file).ToLower()
            $contentType = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.json' { 'application/json; charset=utf-8' }
                '.svg'  { 'image/svg+xml' }
                '.png'  { 'image/png' }
                '.jpg'  { 'image/jpeg' }
                '.jpeg' { 'image/jpeg' }
                '.ico'  { 'image/x-icon' }
                default { 'application/octet-stream' }
            }
            $bytes = [IO.File]::ReadAllBytes($file)
            $res.ContentType = $contentType
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "  -> 200 OK ($($bytes.Length) bytes, $contentType)"
        } else {
            $res.StatusCode = 404
            $msg = [Text.Encoding]::UTF8.GetBytes("404 Not Found: $file")
            $res.OutputStream.Write($msg, 0, $msg.Length)
            Write-Host "  -> 404 Not Found"
        }
        $res.Close()
    } catch {
        Write-Host "Error: $_"
        try { $ctx.Response.StatusCode = 500; $ctx.Response.Close() } catch {}
    }
}
$listener.Stop()
