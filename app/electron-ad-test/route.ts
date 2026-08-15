const HTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
      overflow: hidden;
    }
    .footer-ad {
      width: 728px;
      height: 90px;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <div class="footer-ad">
    <script>
      atOptions = {
        'key' : '6f383448fbb3638a09e603ab310aa674',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    </script>
    <script src="https://www.highperformanceformat.com/6f383448fbb3638a09e603ab310aa674/invoke.js"></script>
  </div>
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
