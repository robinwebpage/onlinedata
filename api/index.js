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
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--green:#00e676;--green-mid:#00c853;--green-dark:#007a33;--bg:#080f0a;--bg2:#0d160f;--surface:#152018;--border:#1e3022;--text:#e8f5e9;--muted:#6a8f70}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;font-weight:300;overflow-x:hidden}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:1;opacity:0.4}
header{position:fixed;top:0;left:0;right:0;z-index:100;padding:0 48px;height:72px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);background:rgba(8,15,10,0.9);backdrop-filter:blur(16px)}
.logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;letter-spacing:-0.03em;color:#fff;text-decoration:none;display:flex;align-items:center;gap:10px}
.logo-dot{width:8px;height:8px;background:var(--green);border-radius:50%;display:inline-block;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:0.6}}
nav{display:flex;align-items:center;gap:32px}
nav a{color:var(--muted);text-decoration:none;font-size:0.875rem;font-weight:400;letter-spacing:0.04em;text-transform:uppercase;transition:color 0.2s}
nav a:hover{color:var(--green)}
.btn-nav{background:var(--green)!important;color:var(--bg)!important;padding:10px 24px;border-radius:2px;font-weight:600!important}
.btn-nav:hover{background:var(--green-mid)!important}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:120px 48px 80px;position:relative;overflow:hidden}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:60px 60px;opacity:0.4;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)}
.blob{position:absolute;border-radius:50%;filter:blur(100px);pointer-events:none}
.blob-1{width:600px;height:600px;background:radial-gradient(circle,rgba(0,230,118,0.12) 0%,transparent 70%);top:-100px;right:-100px;animation:float1 8s ease-in-out infinite}
.blob-2{width:400px;height:400px;background:radial-gradient(circle,rgba(0,200,83,0.08) 0%,transparent 70%);bottom:100px;left:-50px;animation:float2 10s ease-in-out infinite}
@keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(-30px,30px)}}
@keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-20px)}}
.hero-tag{display:inline-flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--border);padding:6px 16px;border-radius:100px;font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--green);margin-bottom:40px;width:fit-content;animation:fadeUp 0.8s ease both}
.hero-tag span{width:6px;height:6px;background:var(--green);border-radius:50%;display:inline-block}
.hero-title{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(3.5rem,8vw,8rem);line-height:0.95;letter-spacing:-0.04em;color:#fff;max-width:900px;animation:fadeUp 0.8s 0.1s ease both}
.hero-title em{font-style:normal;color:var(--green)}
.hero-sub{margin-top:32px;font-size:1.1rem;color:var(--muted);max-width:480px;line-height:1.7;animation:fadeUp 0.8s 0.2s ease both}
.hero-actions{margin-top:52px;display:flex;gap:16px;align-items:center;flex-wrap:wrap;animation:fadeUp 0.8s 0.3s ease both}
.btn-primary{background:var(--green);color:var(--bg);padding:18px 40px;font-family:'Syne',sans-serif;font-weight:700;font-size:0.9rem;letter-spacing:0.05em;text-transform:uppercase;text-decoration:none;border-radius:2px;display:inline-flex;align-items:center;gap:10px;transition:all 0.25s}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(0,230,118,0.25)}
.btn-ghost{color:var(--text);padding:18px 32px;font-size:0.9rem;text-decoration:none;border:1px solid var(--border);border-radius:2px;display:inline-flex;align-items:center;gap:10px;transition:all 0.25s}
.btn-ghost:hover{border-color:var(--green);color:var(--green)}
.hero-stats{margin-top:80px;display:flex;gap:60px;padding-top:48px;border-top:1px solid var(--border);animation:fadeUp 0.8s 0.4s ease both;flex-wrap:wrap}
.stat-num{font-family:'Syne',sans-serif;font-weight:800;font-size:2.2rem;color:#fff;letter-spacing:-0.03em}
.stat-num span{color:var(--green)}
.stat-label{font-size:0.8rem;color:var(--muted);letter-spacing:0.05em;text-transform:uppercase;margin-top:4px}
.marquee-wrap{overflow:hidden;border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:18px 0;background:var(--bg2)}
.marquee-track{display:flex;animation:marquee 25s linear infinite;width:max-content}
.marquee-item{display:flex;align-items:center;gap:20px;padding:0 40px;font-family:'Syne',sans-serif;font-size:0.75rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);white-space:nowrap}
.marquee-item::after{content:'✦';color:var(--green);font-size:0.6rem}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.section{padding:120px 48px}
.section-label{font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--green);margin-bottom:20px;display:flex;align-items:center;gap:12px}
.section-label::before{content:'';width:30px;height:1px;background:var(--green)}
.section-title{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3.5rem);letter-spacing:-0.03em;color:#fff;line-height:1.05;max-width:600px}
.steps{margin-top:80px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2px}
.step{background:var(--bg2);border:1px solid var(--border);padding:48px 40px;position:relative;overflow:hidden;transition:border-color 0.3s,transform 0.3s;opacity:0;transform:translateY(24px)}
.step:hover{border-color:var(--green-dark);transform:translateY(-4px)!important}
.step::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--green);transform:scaleX(0);transition:transform 0.3s;transform-origin:left}
.step:hover::before{transform:scaleX(1)}
.step-num{font-family:'Syne',sans-serif;font-weight:800;font-size:4rem;color:var(--border);line-height:1;margin-bottom:32px;letter-spacing:-0.05em}
.step-icon{width:48px;height:48px;background:var(--surface);border:1px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;margin-bottom:24px}
.step h3{font-family:'Syne',sans-serif;font-weight:700;font-size:1.2rem;color:#fff;margin-bottom:12px}
.step p{color:var(--muted);font-size:0.9rem;line-height:1.7}
.cats{padding:0 48px 120px}
.cats-grid{margin-top:64px;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px}
.cat{background:var(--bg2);border:1px solid var(--border);padding:28px 24px;border-radius:4px;text-decoration:none;display:flex;flex-direction:column;gap:12px;transition:all 0.25s;opacity:0;transform:translateY(24px)}
.cat:hover{border-color:var(--green-dark);background:var(--surface);transform:translateY(-3px)!important}
.cat-icon{font-size:1.6rem}
.cat-name{font-family:'Syne',sans-serif;font-weight:600;font-size:0.95rem;color:#fff}
.cat-count{font-size:0.75rem;color:var(--muted)}
.cta{margin:0 48px 120px;background:var(--surface);border:1px solid var(--green-dark);padding:80px;display:flex;align-items:center;justify-content:space-between;gap:40px;position:relative;overflow:hidden;flex-wrap:wrap}
.cta::before{content:'';position:absolute;top:-80px;right:-80px;width:300px;height:300px;background:radial-gradient(circle,rgba(0,230,118,0.12) 0%,transparent 70%);filter:blur(40px)}
.cta h2{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(1.8rem,3vw,2.8rem);letter-spacing:-0.03em;color:#fff;max-width:480px;line-height:1.1}
.cta h2 span{color:var(--green)}
footer{border-top:1px solid var(--border);padding:60px 48px 40px;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:32px}
.footer-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;color:#fff;display:flex;align-items:center;gap:8px;text-decoration:none}
.footer-links{display:flex;gap:32px;flex-wrap:wrap}
.footer-links a{color:var(--muted);text-decoration:none;font-size:0.85rem;transition:color 0.2s}
.footer-links a:hover{color:var(--green)}
.footer-copy{color:var(--muted);font-size:0.75rem;width:100%;padding-top:32px;border-top:1px solid var(--border);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}
@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:768px){header{padding:0 24px}nav a:not(.btn-nav){display:none}.hero{padding:100px 24px 60px}.hero-stats{gap:32px}.section,.cats{padding:80px 24px}.cta{padding:48px 32px;margin:0 24px 80px}footer{padding:48px 24px 32px}}
</style>
</head>
<body>
<header>
  <a href="/" class="logo"><span class="logo-dot"></span>Unique Hire</a>
  <nav>
    <a href="/jobs/">Browse Jobs</a>
    <a href="/careers-advice/">Career Advice</a>
    <a href="/advertiser/vacancies/vacancy/" class="btn-nav">Post a Job</a>
  </nav>
</header>
<section class="hero">
  <div class="hero-grid"></div>
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="hero-tag"><span></span>Now hiring in Stevenage &amp; beyond</div>
  <h1 class="hero-title">Find work<br/>that feels<br/><em>uniquely</em> yours.</h1>
  <p class="hero-sub">Unique Hire connects ambitious people with the roles they were made for. Real jobs. Real people. No noise.</p>
  <div class="hero-actions">
    <a href="/jobs/" class="btn-primary">Browse All Jobs &#8594;</a>
    <a href="/careers-advice/" class="btn-ghost">Career Advice</a>
  </div>
  <div class="hero-stats">
    <div><div class="stat-num">10<span>k+</span></div><div class="stat-label">Active Listings</div></div>
    <div><div class="stat-num">2<span>k+</span></div><div class="stat-label">Companies Hiring</div></div>
    <div><div class="stat-num">98<span>%</span></div><div class="stat-label">Placement Rate</div></div>
  </div>
</section>
<div class="marquee-wrap"><div class="marquee-track">
  <div class="marquee-item">Engineering</div><div class="marquee-item">Marketing</div><div class="marquee-item">Finance</div><div class="marquee-item">Healthcare</div><div class="marquee-item">Design</div><div class="marquee-item">Technology</div><div class="marquee-item">Logistics</div><div class="marquee-item">Education</div><div class="marquee-item">Sales</div><div class="marquee-item">Hospitality</div><div class="marquee-item">Legal</div><div class="marquee-item">Admin</div>
  <div class="marquee-item">Engineering</div><div class="marquee-item">Marketing</div><div class="marquee-item">Finance</div><div class="marquee-item">Healthcare</div><div class="marquee-item">Design</div><div class="marquee-item">Technology</div><div class="marquee-item">Logistics</div><div class="marquee-item">Education</div><div class="marquee-item">Sales</div><div class="marquee-item">Hospitality</div><div class="marquee-item">Legal</div><div class="marquee-item">Admin</div>
</div></div>
<section class="section">
  <div class="section-label">How it works</div>
  <h2 class="section-title">Three steps to your next role</h2>
  <div class="steps">
    <div class="step"><div class="step-num">01</div><div class="step-icon">&#128269;</div><h3>Search &amp; Filter</h3><p>Browse thousands of verified listings by location, industry, and salary. No fake jobs, no clutter.</p></div>
    <div class="step"><div class="step-num">02</div><div class="step-icon">&#128196;</div><h3>Apply Instantly</h3><p>One-click applications directly to employers. Your profile does the heavy lifting for you.</p></div>
    <div class="step"><div class="step-num">03</div><div class="step-icon">&#127919;</div><h3>Get Hired</h3><p>Connect with hiring managers directly. No middlemen, no delays. Just results.</p></div>
    <div class="step"><div class="step-num">04</div><div class="step-icon">&#128640;</div><h3>Grow Your Career</h3><p>Access career advice, salary insights, and skills tools to keep levelling up.</p></div>
  </div>
</section>
<div class="cats">
  <div class="section-label">Explore roles</div>
  <h2 class="section-title">Browse by category</h2>
  <div class="cats-grid">
    <a class="cat" href="/jobs/?q=Technology"><div class="cat-icon">&#128187;</div><div class="cat-name">Technology</div><div class="cat-count">1,240 jobs</div></a>
    <a class="cat" href="/jobs/?q=Healthcare"><div class="cat-icon">&#127973;</div><div class="cat-name">Healthcare</div><div class="cat-count">890 jobs</div></a>
    <a class="cat" href="/jobs/?q=Finance"><div class="cat-icon">&#128202;</div><div class="cat-name">Finance</div><div class="cat-count">670 jobs</div></a>
    <a class="cat" href="/jobs/?q=Creative"><div class="cat-icon">&#127912;</div><div class="cat-name">Creative</div><div class="cat-count">430 jobs</div></a>
    <a class="cat" href="/jobs/?q=Engineering"><div class="cat-icon">&#127959;</div><div class="cat-name">Engineering</div><div class="cat-count">810 jobs</div></a>
    <a class="cat" href="/jobs/?q=Logistics"><div class="cat-icon">&#128666;</div><div class="cat-name">Logistics</div><div class="cat-count">560 jobs</div></a>
    <a class="cat" href="/jobs/?q=Education"><div class="cat-icon">&#127891;</div><div class="cat-name">Education</div><div class="cat-count">390 jobs</div></a>
    <a class="cat" href="/jobs/?q=Hospitality"><div class="cat-icon">&#127869;</div><div class="cat-name">Hospitality</div><div class="cat-count">720 jobs</div></a>
    <a class="cat" href="/jobs/?q=Legal"><div class="cat-icon">&#9878;</div><div class="cat-name">Legal</div><div class="cat-count">210 jobs</div></a>
    <a class="cat" href="/jobs/?q=Marketing"><div class="cat-icon">&#128226;</div><div class="cat-name">Marketing</div><div class="cat-count">540 jobs</div></a>
    <a class="cat" href="/jobs/?q=Admin"><div class="cat-icon">&#127970;</div><div class="cat-name">Admin</div><div class="cat-count">480 jobs</div></a>
    <a class="cat" href="/jobs/?q=Sales"><div class="cat-icon">&#129309;</div><div class="cat-name">Sales</div><div class="cat-count">650 jobs</div></a>
  </div>
</div>
<div class="cta">
  <h2>Ready to find your <span>next chapter?</span></h2>
  <a href="/jobs/" class="btn-primary">Start Searching &#8594;</a>
</div>
<footer>
  <a href="/" class="footer-logo"><span style="width:7px;height:7px;background:#00e676;border-radius:50%;display:inline-block"></span>Unique Hire</a>
  <div class="footer-links">
    <a href="/jobs/">Jobs</a>
    <a href="/careers-advice/">Career Advice</a>
    <a href="/advertiser/vacancies/vacancy/">Post a Job</a>
  </div>
  <div class="footer-copy">
    <span>&#169; 2026 Unique Hire. All rights reserved.</span>
    <span>Powered by passion, not algorithms.</span>
  </div>
</footer>
<script>
const obs = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
      e.target.style.transition='opacity 0.6s ease,transform 0.6s ease,border-color 0.3s,background 0.25s';
    }
  });
},{threshold:0.1});
document.querySelectorAll('.step,.cat').forEach(function(el){obs.observe(el);});
</script>
</body>
</html>`;

// Injected into every proxied inner page: header + full green dark theme override
function getInject() {
  return `<style>
/* ── Unique Hire Header ── */
#uh-bar{position:fixed;top:0;left:0;right:0;z-index:99999;height:64px;padding:0 40px;display:flex;align-items:center;justify-content:space-between;background:rgba(8,15,10,0.97);backdrop-filter:blur(16px);border-bottom:1px solid #1e3022;font-family:sans-serif}
#uh-bar a.uh-logo{font-weight:800;font-size:1.15rem;color:#fff;text-decoration:none;display:flex;align-items:center;gap:8px;letter-spacing:-0.02em}
#uh-bar .uh-dot{width:7px;height:7px;background:#00e676;border-radius:50%;display:inline-block;animation:uhp 2s infinite}
@keyframes uhp{0%,100%{transform:scale(1)}50%{transform:scale(1.5);opacity:0.6}}
#uh-bar nav{display:flex;gap:24px;align-items:center}
#uh-bar nav a{color:#6a8f70;text-decoration:none;font-size:0.8rem;letter-spacing:0.05em;text-transform:uppercase;transition:color 0.2s}
#uh-bar nav a:hover{color:#00e676}
#uh-bar .uh-btn{background:#00e676!important;color:#080f0a!important;padding:8px 20px;border-radius:2px;font-weight:600!important}
#uh-bar .uh-btn:hover{background:#00c853!important}
body{padding-top:64px!important}
@media(max-width:600px){#uh-bar nav a:not(.uh-btn){display:none}#uh-bar{padding:0 20px}}

/* ── Green Dark Theme Override ── */
/* Base */
html,body{background:#080f0a!important;color:#e8f5e9!important}

/* All red/orange/brand colors -> green */
a{color:#00c853!important}
a:hover{color:#00e676!important}

/* Buttons */
.button,.btn,button,[type=submit],[type=button],
.ux-apply-button,.apply-button,.search-button,
input[type=submit]{
  background:#00e676!important;
  color:#080f0a!important;
  border-color:#00e676!important;
  border-radius:2px!important;
}
.button:hover,.btn:hover,button:hover,
.ux-apply-button:hover,.apply-button:hover,
.search-button:hover{
  background:#00c853!important;
  color:#080f0a!important;
}

/* Header / nav from original site — hide it since we inject our own */
.ux-header,.site-header,.header-wrapper,
#header,#site-header,.main-header{
  display:none!important;
}

/* Page backgrounds */
.ux-content-wrap,.main-content,.content-area,
#content,#main,.page-wrapper,.site-wrapper,
.ux-site-wrapper{
  background:#080f0a!important;
  color:#e8f5e9!important;
}

/* Panels / cards */
.ux-job-summary,.job-summary,.job-item,
.job-listing,.result-item,.listing-item,
.card,.panel,.box{
  background:#0d160f!important;
  border-color:#1e3022!important;
  color:#e8f5e9!important;
}
.ux-job-summary:hover,.job-item:hover,.listing-item:hover{
  border-color:#007a33!important;
  background:#152018!important;
}

/* Job titles */
.ux-job-summary__title,.job-title,h2.title,h3.title,
.listing-title,.result-title{
  color:#fff!important;
}
.ux-job-summary__title a,.job-title a{
  color:#00e676!important;
}
.ux-job-summary__title a:hover,.job-title a:hover{
  color:#00c853!important;
}

/* Meta / labels */
.ux-job-summary__location,.ux-job-summary__salary,
.ux-job-summary__company,.job-meta,.listing-meta,
.result-meta,.job-location,.job-salary{
  color:#6a8f70!important;
}

/* Search bar */
.ux-search,.search-form,.search-bar,
#job-search,#search-form,.search-wrapper{
  background:#0d160f!important;
  border-color:#1e3022!important;
}
.ux-search input,.search-form input,
#job-search input,.search-bar input{
  background:#152018!important;
  color:#e8f5e9!important;
  border-color:#1e3022!important;
}
.ux-search input:focus,.search-form input:focus{
  border-color:#00e676!important;
  outline:none!important;
  box-shadow:0 0 0 2px rgba(0,230,118,0.15)!important;
}

/* Pagination */
.pagination a,.pager a,.page-link{
  background:#0d160f!important;
  color:#6a8f70!important;
  border-color:#1e3022!important;
}
.pagination a:hover,.pager a:hover,.page-link:hover,
.pagination .active a,.pagination .current{
  background:#00e676!important;
  color:#080f0a!important;
  border-color:#00e676!important;
}

/* Tags / badges */
.tag,.badge,.label,.pill,.chip{
  background:#152018!important;
  color:#00e676!important;
  border-color:#1e3022!important;
}

/* Sidebar */
.sidebar,.widget-area,#sidebar,
.ux-sidebar,.filter-panel,.search-filters{
  background:#0d160f!important;
  border-color:#1e3022!important;
  color:#e8f5e9!important;
}

/* Footer */
footer,.footer,.site-footer,#footer,
.ux-footer{
  background:#080f0a!important;
  border-top:1px solid #1e3022!important;
  color:#6a8f70!important;
}
footer a,.footer a,.site-footer a{
  color:#6a8f70!important;
}
footer a:hover,.footer a:hover{
  color:#00e676!important;
}

/* Headings */
h1,h2,h3,h4,h5,h6{color:#fff!important}

/* Inputs / selects */
input,select,textarea{
  background:#152018!important;
  color:#e8f5e9!important;
  border-color:#1e3022!important;
  border-radius:2px!important;
}
input:focus,select:focus,textarea:focus{
  border-color:#00e676!important;
  outline:none!important;
  box-shadow:0 0 0 2px rgba(0,230,118,0.15)!important;
}

/* Horizontal rules / dividers */
hr{border-color:#1e3022!important}

/* Breadcrumbs */
.breadcrumb,.breadcrumbs,.ux-breadcrumb{
  color:#6a8f70!important;
}
.breadcrumb a,.breadcrumbs a{color:#00c853!important}

/* Alerts / notices */
.alert,.notice,.message{
  background:#152018!important;
  border-color:#1e3022!important;
  color:#e8f5e9!important;
}

/* Cookie bar */
.cookie-bar,.cookie-banner,.cookie-notice{
  background:#0d160f!important;
  border-top:1px solid #1e3022!important;
  color:#6a8f70!important;
}
.cookie-bar .button,.cookie-banner .button{
  background:#00e676!important;
  color:#080f0a!important;
}
</style>
<div id="uh-bar">
  <a href="/" class="uh-logo"><span class="uh-dot"></span>Unique Hire</a>
  <nav>
    <a href="/jobs/">Browse Jobs</a>
    <a href="/careers-advice/">Career Advice</a>
    <a href="/advertiser/vacancies/vacancy/" class="uh-btn">Post a Job</a>
  </nav>
</div>`;
}

export default async function handler(req) {
  const proxyHost = new URL(req.url).host;
  const requestURL = new URL(req.url);

  if (requestURL.pathname === "/" || requestURL.pathname === "") {
    return new Response(CUSTOM_HOME, {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  const STRIP = [
    "connection","keep-alive","proxy-authenticate","proxy-authorization",
    "te","trailers","transfer-encoding","upgrade","cookie",
    "x-forwarded-for","x-real-ip","cf-connecting-ip","cf-ipcountry","true-client-ip",
  ];

  const cleanHeaders = {};
  for (const [k, v] of req.headers.entries()) {
    if (!STRIP.includes(k.toLowerCase())) cleanHeaders[k] = v;
  }

  const upstreamHeaders = {
    ...cleanHeaders,
    host: TARGET,
    "x-forwarded-host": proxyHost,
    "x-forwarded-proto": "https",
  };

  const rewrite = (text) =>
    text.split("https://" + TARGET).join("https://" + proxyHost)
        .split("http://" + TARGET).join("https://" + proxyHost);

  try {
    let fetchURL = "https://" + TARGET + requestURL.pathname + requestURL.search;
    let response;
    let redirectCount = 0;

    while (redirectCount < 5) {
      response = await fetch(fetchURL, {
        method: req.method,
        headers: upstreamHeaders,
        body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
        redirect: "manual",
      });
      if (response.status >= 300 && response.status < 400) {
        const loc = response.headers.get("location") || "";
        fetchURL = loc.startsWith("http") ? loc : "https://" + TARGET + loc;
        redirectCount++;
        continue;
      }
      break;
    }

    if (!response || redirectCount >= 5) {
      return new Response("Too many upstream redirects", { status: 502 });
    }

    const SKIP_RES = ["content-encoding","transfer-encoding","content-length","connection"];
    const resHeaders = new Headers();
    for (const [k, v] of response.headers.entries()) {
      if (SKIP_RES.includes(k.toLowerCase())) continue;
      if (k.toLowerCase() === "set-cookie") {
        resHeaders.set(k, v.replace(/Domain=[^;]+;?\s*/gi, ""));
        continue;
      }
      resHeaders.set(k, v);
    }

    const ct = response.headers.get("content-type") || "";

    if (ct.includes("text/html")) {
      let body = rewrite(await response.text());
      body = body.replace(/<body[^>]*>/i, (m) => m + getInject());
      body = body.replace(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi, (match, json) => {
        try {
          const schema = JSON.parse(json);
          const update = (obj) => {
            if (!obj || typeof obj !== "object") return obj;
            if (Array.isArray(obj)) return obj.map(update);
            if (obj["@type"] === "JobPosting") {
              obj["datePosted"] = "2026-05-06";
              obj["validThrough"] = "2026-12-31";
            }
            Object.keys(obj).forEach((k) => { obj[k] = update(obj[k]); });
            return obj;
          };
          return "<script type=\"application/ld+json\">" + JSON.stringify(update(schema)) + "<\/script>";
        } catch(e) { return match; }
      });
      resHeaders.set("content-type", "text/html; charset=utf-8");
      return new Response(body, { status: response.status, headers: resHeaders });
    }

    if (ct.includes("text/css")) {
      resHeaders.set("content-type", "text/css");
      return new Response(rewrite(await response.text()), { status: response.status, headers: resHeaders });
    }

    if (requestURL.pathname.includes("sitemap") || ct.includes("xml")) {
      resHeaders.set("content-type", "application/xml; charset=utf-8");
      return new Response(rewrite(await response.text()), { status: response.status, headers: resHeaders });
    }

    if (ct.includes("javascript")) {
      resHeaders.set("content-type", ct);
      return new Response(rewrite(await response.text()), { status: response.status, headers: resHeaders });
    }

    return new Response(response.body, { status: response.status, headers: resHeaders });

  } catch (error) {
    return new Response("Proxy error: " + error.message, { status: 500 });
  }
}
