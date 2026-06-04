<!DOCTYPE html>
<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <link href="https://media.base44.com/images/public/6a20fa7d18cfb80adba23837/4cdf2c4a9_logo.png" rel="icon" type="image/svg+xml"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <link href="/manifest.json" rel="manifest"/>
  <title>
   static | ChatSpace
  </title>
  <script crossorigin="" src="/assets/index-SjgKXXJm.js" type="module">
  </script>
  <link crossorigin="" href="/assets/index-DrDhp0vF.css" rel="stylesheet"/>
  <script type="module">
   if (window.self === window.top) {
  let lastPath = "";
  function getPageNameFromPath(path) {
    const segments = path.split("/").filter(Boolean);
    return segments[0] || null;
  }
  function trackPageView() {
    const path = window.location.pathname;
    if (path === lastPath) return;
    lastPath = path;
    const pageName = getPageNameFromPath(path) || "home";
    const appId = "6a20fa7d18cfb80adba23837";
    if (!appId) return;
    fetch(`/api/app-logs/${appId}/log-user-in-app/${pageName}`, {
      method: "POST",
    }).catch(() => {});
  }
  const originalPushState = history.pushState.bind(history);
  history.pushState = function (...args) {
    originalPushState(...args);
    trackPageView();
  };
  const originalReplaceState = history.replaceState.bind(history);
  history.replaceState = function (...args) {
    originalReplaceState(...args);
    trackPageView();
  };
  window.addEventListener("popstate", trackPageView);
  trackPageView();
}
  </script>
  <meta content="A vibrant real-time social chat room where you can customize your profile, play games, and connect with communities globally." name="description"/>
  <meta content="static | ChatSpace" property="og:title"/>
  <meta content="A vibrant real-time social chat room where you can customize your profile, play games, and connect with communities globally." property="og:description"/>
  <meta content="https://media.base44.com/images/public/6a20fa7d18cfb80adba23837/4cdf2c4a9_logo.png/v1/fill/w_1200,h_630/4cdf2c4a9_logo.png" property="og:image"/>
  <meta content="https://xatspacejahlize.base44.app/static/js/badge.js" property="og:url"/>
  <meta content="website" property="og:type"/>
  <meta content="ChatSpace" property="og:site_name"/>
  <meta content="static | ChatSpace" name="twitter:title"/>
  <meta content="A vibrant real-time social chat room where you can customize your profile, play games, and connect with communities globally." name="twitter:description"/>
  <meta content="https://media.base44.com/images/public/6a20fa7d18cfb80adba23837/4cdf2c4a9_logo.png/v1/fill/w_1200,h_630/4cdf2c4a9_logo.png" name="twitter:image"/>
  <meta content="summary_large_image" name="twitter:card"/>
  <meta content="https://xatspacejahlize.base44.app/static/js/badge.js" name="twitter:url"/>
  <meta content="yes" name="mobile-web-app-capable"/>
  <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
  <meta content="ChatSpace" name="apple-mobile-web-app-title"/>
  <link href="https://xatspacejahlize.base44.app/static/js/badge.js" rel="canonical"/>
  <script data-seo-source="builder" type="application/ld+json">
   {"name": "ChatSpace", "@context": "https://schema.org", "@type": "WebSite", "url": "https://xatspacejahlize.base44.app"}
  </script>
  <script data-seo-source="builder" type="application/ld+json">
   {"name": "ChatSpace", "logo": "https://media.base44.com/images/public/6a20fa7d18cfb80adba23837/4cdf2c4a9_logo.png", "@context": "https://schema.org", "@type": "Organization", "url": "https://xatspacejahlize.base44.app"}
  </script>
  <script data-seo-source="builder" type="application/ld+json">
   {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://xatspacejahlize.base44.app/"}, {"@type": "ListItem", "position": 2, "name": "static", "item": "https://xatspacejahlize.base44.app/static"}, {"@type": "ListItem", "position": 3, "name": "js", "item": "https://xatspacejahlize.base44.app/static/js"}, {"@type": "ListItem", "position": 4, "name": "badge.js", "item": "https://xatspacejahlize.base44.app/static/js/badge.js"}]}
  </script>
  <script async="true" data-app-id="6a20fa7d18cfb80adba23837" data-platform-url="https://app.base44.com" src="/static/js/badge.js">
  </script>
 </head>
 <body>
  <div id="root">
   <div data-seo-source="builder" id="seo-snapshot" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">
    <h1>
     static | ChatSpace
    </h1>
    <p>
     A vibrant real-time social chat room where you can customize your profile, play games, and connect with communities globally.
    </p>
    <nav aria-label="Pages">
     <h2>
      Pages
     </h2>
     <ul>
      <li>
       <a href="/login">
        Login
       </a>
      </li>
      <li>
       <a href="/register">
        Register
       </a>
      </li>
      <li>
       <a href="/forgot-password">
        Forgot Password
       </a>
      </li>
      <li>
       <a href="/reset-password">
        Reset Password
       </a>
      </li>
      <li>
       <a href="/">
        Home
       </a>
      </li>
     </ul>
    </nav>
   </div>
  </div>
 </body>
</html>
