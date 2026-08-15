const HTML = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">


  <script async
    src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
    crossorigin="anonymous"></script>


  <script>
    window.googletag = window.googletag || {cmd: []};


    googletag.cmd.push(function () {
      googletag.defineSlot(
        '/22672110917/Footerad',
        [728, 90],
        'div-gpt-ad'
      ).addService(googletag.pubads());


      googletag.enableServices();
    });
  </script>
</head>


<body>
  <div
    id="div-gpt-ad"
    style="width:728px;height:90px;">
    <script>
      googletag.cmd.push(function () {
        googletag.display('div-gpt-ad');
      });
    </script>
  </div>
</body>
</html>
`

export function GET(): Response {
  return new Response(HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  })
}
