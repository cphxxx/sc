// ==UserScript==
// @name        sc-left-sidebar
// @version     0.9
// @author      cphxxx
// @description Move sidebar to the left on SC torrent page.
// @homepage    https://secret-cinema.pw/forums.php?action=viewthread&threadid=1649
//
// @icon        https://secret-cinema.pw/favicon.ico
// @match       *://*.secret-cinema.pw/torrents.php?id=*
// @run-at      document-body
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('body#torrents .sidebar { float: left; !important; }');
