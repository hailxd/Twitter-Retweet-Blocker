// ==UserScript==
// @name         Hide Retweets
// @version      1.8
// @author       Hail
// @match        https://x.com/*
// ==/UserScript==

const observer = new MutationObserver(mutations => {
  if (!window.location.href.includes("/status/") && mutations.length > 8) {
    document.querySelectorAll(".r-15zivkp").forEach(el => {
      const article = el.closest('div[data-testid="cellInnerDiv"]');
      if (article) article.style.display = 'none';
    });
  }
});

observer.observe(document.body, { childList: true, subtree: true });
