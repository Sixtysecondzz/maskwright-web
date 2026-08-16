const HTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: #0d0e11;
      overflow: hidden;
    }
    .footer-ad {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 8px 12px;
    }
    .footer-ad-frame {
      width: 728px;
      height: 90px;
      overflow: hidden;
      border-radius: 4px;
      background: #141519;
    }
  </style>
</head>
<body>
  <div class="footer-ad">
    <div class="footer-ad-frame">
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
  </div>
  <script>(function(s){s.dataset.zone='11580380',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
  <script>(function(s){s.dataset.zone='11580441',s.src='https://zovidree.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
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
