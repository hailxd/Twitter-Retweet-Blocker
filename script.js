// ==UserScript==
// @name         Hide Retweets
// @version      1.9
// @author       Hail
// @match        https://x.com/*
// ==/UserScript==

new MutationObserver(m => {
  if (!location.href.includes("/status/") && m.length > 8)
    document.querySelectorAll('.r-15zivkp').forEach(e => {
      const a = e.closest('div[data-testid="cellInnerDiv"]');
      if (a) a.style.display = 'none';
    });
}).observe(document.body, { childList: true, subtree: true });
