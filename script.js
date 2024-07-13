// ==UserScript==
// @name         Hide Retweets
// @version      1.5
// @author       Hail
// @match        https://x.com/*
// ==/UserScript==

function findArticleAncestor(el) {
    let current = el;
    const maxDepth = 6;

    for (let depth = 0; current && depth < maxDepth; depth++) {
        if (current.tagName === 'ARTICLE') {
            return current.parentNode?.parentNode || null;
        }
        current = current.parentNode;
    }

    return null;
}

function removeRetweets(nodes) {
    nodes.forEach(node => {
        if (node.nodeType === 1) {
            [...node.querySelectorAll("div.r-15zivkp")]
                .map(findArticleAncestor)
                .forEach(el => el && el.parentElement.removeChild(el));
        }
    });
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
            removeRetweets(mutation.addedNodes);
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
