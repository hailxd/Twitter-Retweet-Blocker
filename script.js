// ==UserScript==
// @name         Hide Retweets
// @version      1.10
// @author       Hail
// @match        https://x.com/*
// @grant        GM_addStyle
// ==/UserScript==

new MutationObserver(m => {
  if (!location.href.includes("/status/") && m.length > 8)
    document.querySelectorAll('.r-15zivkp').forEach(e => {
      	const a = e.closest('div[data-testid="cellInnerDiv"]');
		if (a) {a.style.display = 'none';e.classList.remove('r-15zivkp');}
    });
}).observe(document.body, { childList: true, subtree: true });
