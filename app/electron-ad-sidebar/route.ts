const HTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 300px;
      height: 250px;
      background: #0d0e11;
      overflow: hidden;
    }
  </style>
</head>
<body>
</body>
</html>
`

export function GET(): Response {
  return new Response(HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })
}
