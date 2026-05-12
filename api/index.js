export const config = {
  runtime: "edge",
};

const TARGET = "jobs.stevenagefc.com";

const CUSTOM_HOME = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Unique Hire — Find Your Next Role</title>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>

<style>
*,*::before,*::after{
  box-sizing:border-box;
  margin:0;
  padding:0
}

body{
  background:#080f0a;
  color:#fff;
  font-family:'DM Sans',sans-serif;
}

header{
  padding:20px 40px;
  background:#0d160f;
  border-bottom:1px solid #1e3022;
}

.logo{
  color:#00e676;
  font-size:28px;
  text-decoration:none;
  font-weight:800;
}

.hero{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding:100px 20px;
}

.hero-title{
  font-size:70px;
  line-height:1;
  margin-bottom:25px;
}

.hero-title span{
  color:#00e676;
}

.hero-sub{
  max-width:700px;
  color:#8fb59a;
  font-size:18px;
  line-height:1.7;
  margin-bottom:40px;
}

.hero-actions{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
}

.btn-primary{
  background:#00e676;
  color:#000;
  padding:16px 40px;
  text-decoration:none;
  border-radius:4px;
  font-weight:bold;
}

.btn-ghost{
  border:1px solid #1e3022;
  color:#fff;
  padding:16px 40px;
  text-decoration:none;
  border-radius:4px;
}

.ad-wrap{
  width:100%;
  display:flex;
  justify-content:center;
  margin-bottom:25px;
}
</style>

</head>

<body>

<header>
  <a href="/" class="logo">Unique Hire</a>
</header>

<section class="hero">

  <h1 class="hero-title">
    Find work that feels
    <span>uniquely</span> yours.
  </h1>

  <p class="hero-sub">
    Unique Hire connects ambitious people with the roles they were made for.
    Real jobs. Real people. No noise.
  </p>

  <div class="hero-actions">

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

    <a href="/jobs/" class="btn-primary">
      Browse All Jobs →
    </a>

    <a href="/careers-advice/" class="btn-ghost">
      Career Advice
    </a>

  </div>

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
  border-bottom:1px solid #1e3022;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 30px;
  z-index:999999;
}

#uh-bar a{
  color:#00e676;
  text-decoration:none;
  margin-left:20px;
}

.ad-wrap-inject{
  width:100%;
  display:flex;
  justify-content:center;
  margin:25px auto;
}

</style>

<div id="uh-bar">

  <div style="color:#fff;font-weight:800;">
    Unique Hire
  </div>

  <nav>
    <a href="/jobs/">Jobs</a>
    <a href="/careers-advice/">Advice</a>
  </nav>

</div>

<div class="ad-wrap-inject">

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

  // HOMEPAGE
  if (
    requestURL.pathname === "/" ||
    requestURL.pathname === ""
  ) {
    return new Response(CUSTOM_HOME, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

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
    "cf-ipcountry",
    "true-client-ip",
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

    let response;

    response = await fetch(fetchURL, {
      method: req.method,
      headers: upstreamHeaders,
      body:
        req.method !== "GET" &&
        req.method !== "HEAD"
          ? req.body
          : undefined,
      redirect: "manual",
    });

    const SKIP_RES = [
      "content-encoding",
      "transfer-encoding",
      "content-length",
      "connection"
    ];

    const resHeaders = new Headers();

    for (const [k, v] of response.headers.entries()) {

      if (SKIP_RES.includes(k.toLowerCase())) {
        continue;
      }

      resHeaders.set(k, v);
    }

    const ct =
      response.headers.get("content-type") || "";

    // HTML
    if (ct.includes("text/html")) {

      let body =
        rewrite(await response.text());

      body = body.replace(
        /<body[^>]*>/i,
        (m) => m + getInject()
      );

      resHeaders.set(
        "content-type",
        "text/html; charset=utf-8"
      );

      return new Response(body, {
        status: response.status,
        headers: resHeaders,
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

    // XML
    if (
      requestURL.pathname.includes("sitemap") ||
      ct.includes("xml")
    ) {

      resHeaders.set(
        "content-type",
        "application/xml; charset=utf-8"
      );

      return new Response(
        rewrite(await response.text()),
        {
          status: response.status,
          headers: resHeaders,
        }
      );
    }

    // JAVASCRIPT
    if (ct.includes("javascript")) {

      return new Response(
        rewrite(await response.text()),
        {
          status: response.status,
          headers: resHeaders,
        }
      );
    }

    // OTHER FILES
    return new Response(response.body, {
      status: response.status,
      headers: resHeaders,
    });

  } catch (error) {

    return new Response(
      "Proxy error: " + error.message,
      {
        status: 500,
      }
    );
  }
}
