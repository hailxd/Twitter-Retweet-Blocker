// ==UserScript==
// @name         Hide Retweets
// @version      1.4
// @author       Hail
// @match        https://x.com/*
// ==/UserScript==

function findParent(el) {
    el = el.parentNode;
    while (el && el.tagName != "ARTICLE") {
        el = el.parentNode;
    }
    return el;
}

function removeRetweets() {
    [... document.getElementsByClassName("r-15zivkp")]
        .map(findParent)
        .forEach(el => el && el.parentElement.removeChild(el));
}

document.body.addEventListener("DOMNodeInserted", removeRetweets, false);