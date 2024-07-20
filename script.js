// ==UserScript==
// @name         Hide Retweets
// @version      1.7
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
		.forEach(el => {if (el) el.style.display='none'});
}

const observer = new MutationObserver(mutations => {
	if (mutations.length > 8) removeRetweets();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
