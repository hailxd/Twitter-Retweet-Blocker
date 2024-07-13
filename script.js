// ==UserScript==
// @name         Hide Retweets
// @version      1.4
// @author       Hail
// @match        https://x.com/*
// ==/UserScript==

function findArticleAncestor(el) {
    const article = el.closest('article');
    return article ? article.parentNode.parentNode : null;
}

function removeRetweets() {
    [...document.querySelectorAll(".r-15zivkp")]
		.map(findArticleAncestor)
		.forEach(el => el && el.parentElement.removeChild(el));
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
