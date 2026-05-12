export const config = {
  runtime: "edge",
};

const TARGET = "jobs.stevenagefc.com";

const CUSTOM_HOME = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<meta name="google-site-verification" content="tvc2WXepi8RaSp1M6V0Js56kQ9JW2JdVwZe771-xn58" />

<title>Unique Hire — Find Your Next Role</title>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>

<style>
body{
  background:#080f0a;
  color:#fff;
  font-family:sans-serif;
  margin:0;
}

.hero{
  padding:120px 30px;
  text-align:center;
}

.btn{
  background:#00e676;
  color:#000;
  padding:15px 30px;
  text-decoration:none;
  display:inline-block;
  margin-top:20px;
  border-radius:4px;
  font-weight:bold;
}

.ad-wrap{
  display:flex;
  justify-content:center;
  margin:30px auto;
}
</style>
</head>

<body>

<header style="padding:20px;background:#0d160f">
  <h2>Unique Hire</h2>
</header>

<section class="hero">

  <h1>Find Your Dream Job</h1>
  <p>Thousands of jobs available worldwide.</p>

  <!-- ADSTERRA AD START -->
  <div class="ad-wrap">

    <script type="text/javascript">
      atOptions = {
        'key' : '03d4b279c0b6ec0b741bce74f9127cff',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    </script>

    <script
      type="text/javascript"
      src="//www.highperformanceformat.com/03d4b279c0b6ec0b741bce74f9127cff/invoke.js">
    </script>

  </div>
  <!-- ADSTERRA AD END -->

  <a href="/jobs/" class="btn">Browse Jobs</a>

</section>

</body>
</html>`;

function getInject() {
  return `
<style>
body{
  background:#080f0a!important;
  color:#fff!important;
  padding-top:70px!important;
}

#uh-bar{
  position:fixed;
  top:0;
  left:0;
  right:0;
  height:64px;
  background:#0d160f;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 30px;
  z-index:999999;
  border-bottom:1px solid #1e3022;
}

#uh-bar a{
  color:#00e676;
  text-decoration:none;
  margin-left:20px;
}

.adsterra-container{
  display:flex;
  justify-content:center;
  margin:25px auto;
}
</style>

<div id="uh-bar">
  <div style="color:white;font-weight:bold">Unique Hire</div>

  <nav>
    <a href="/jobs/">Jobs</a>
    <a href="/careers-advice/">Advice</a>
  </nav>
</div>

<!-- AD INJECT -->
<div class="adsterra-container">

<script type="text/javascript">
atOptions = {
  'key' : '03d4b279c0b6ec0b741bce74f9127cff',
  'format' : 'iframe',
  'height' : 90,
  'width' : 728,
  'params' : {}
};
</script>

<script
type="text/javascript"
src="//www.highperformanceformat.com/03d4b279c0b6ec0b741bce74f9127cff/invoke.js">
</script>

</div>
`;
}

export default async function handler(req) {

  const proxyHost = new URL(req.url).host;
  const requestURL = new URL(req.url);

  // CUSTOM HOMEPAGE
  if (requestURL.pathname === "/" || requestURL.pathname === "") {
    return new Response(CUSTOM_HOME, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  // REMOVE BAD HEADERS
  const STRIP = [
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailers",
    "transfer-encoding",
    "upgrade",
    "cookie",
    "x-forwarded-for",
    "x-real-ip",
    "cf-connecting-ip",
  ];

  const cleanHeaders = {};

  for (const [k, v] of req.headers.entries()) {
    if (!STRIP.includes(k.toLowerCase())) {
      cleanHeaders[k] = v;
    }
  }

  const upstreamHeaders = {
    ...cleanHeaders,
    host: TARGET,
    "x-forwarded-host": proxyHost,
    "x-forwarded-proto": "https",
  };

  const rewrite = (text) =>
    text
      .split("https://" + TARGET)
      .join("https://" + proxyHost)
      .split("http://" + TARGET)
      .join("https://" + proxyHost);

  try {

    let fetchURL =
      "https://" +
      TARGET +
      requestURL.pathname +
      requestURL.search;

    const response = await fetch(fetchURL, {
      method: req.method,
      headers: upstreamHeaders,
      body:
        req.method !== "GET" &&
        req.method !== "HEAD"
          ? req.body
          : undefined,
      redirect: "manual",
    });

    const resHeaders = new Headers();

    for (const [k, v] of response.headers.entries()) {

      if (
        [
          "content-encoding",
          "transfer-encoding",
          "content-length",
          "connection",
        ].includes(k.toLowerCase())
      ) {
        continue;
      }

      resHeaders.set(k, v);
    }

    // IMPORTANT
    // REMOVE CSP + FRAME BLOCKING
    resHeaders.delete("content-security-policy");
    resHeaders.delete("x-frame-options");

    const ct =
      response.headers.get("content-type") || "";

    // HTML
    if (ct.includes("text/html")) {

      let body = await response.text();

      body = rewrite(body);

      // inject navbar + ad
      body = body.replace(
        /<body[^>]*>/i,
        (m) => m + getInject()
      );

      return new Response(body, {
        status: response.status,
        headers: {
          ...Object.fromEntries(resHeaders),
          "content-type":
            "text/html; charset=utf-8",
        },
      });
    }

    // CSS
    if (ct.includes("text/css")) {

      return new Response(
        rewrite(await response.text()),
        {
          status: response.status,
          headers: resHeaders,
        }
      );
    }

    // JS
    if (ct.includes("javascript")) {

      return new Response(
        rewrite(await response.text()),
        {
          status: response.status,
          headers: resHeaders,
        }
      );
    }

    // XML
    if (
      requestURL.pathname.includes("sitemap") ||
      ct.includes("xml")
    ) {

      return new Response(
        rewrite(await response.text()),
        {
          status: response.status,
          headers: {
            ...Object.fromEntries(resHeaders),
            "content-type":
              "application/xml; charset=utf-8",
          },
        }
      );
    }

    // ALL OTHER FILES
    return new Response(response.body, {
      status: response.status,
      headers: resHeaders,
    });

  } catch (err) {

    return new Response(
      "Proxy Error: " + err.message,
      {
        status: 500,
      }
    );
  }
}
