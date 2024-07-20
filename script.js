// ==UserScript==
// @name         Hide Retweets
// @version      1.5
// @author       Hail
// @match        https://x.com/*
// ==/UserScript==

function findArticleAncestor(el) {
    if (window.location.href.includes("/status/")) return null;
    return el.closest('div[data-testid="cellInnerDiv"]');
}

function removeRetweets() {
    [...document.querySelectorAll(".r-15zivkp")]
		.map(findArticleAncestor)
		.forEach(el => el && el.remove());
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
            removeRetweets();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
