const HTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MaskWright ad</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      min-height: 100%;
      background: #0d0e11;
    }
    .wrap {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .unit,
    .unit iframe {
      width: 300px;
      height: 250px;
      border: 0;
      background: #141519;
    }
    .unit {
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="unit">
      <iframe
        src="https://www.effectivecpmnetwork.com/tsya91cs?key=60d0b3fbe3b7d0dc629281f4004d3915"
        width="300"
        height="250"
        title="Advertisement"
      ></iframe>
    </div>
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
