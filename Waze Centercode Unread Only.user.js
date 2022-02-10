// ==UserScript==
// @name         Waze Centercode Unread Only
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://waze.centercode.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @include      https://waze.centercode.com/project/feedback/track/simplelist.html?*
// ==/UserScript==


(function() {
    'use strict';
    document.getElementById('unread').checked=true;
    document.getElementById('unread').value=8;
    compFormsListSimple(null, $('#simplefilterID').val(), $('#simpleOrderBy').val(), $('#simpleSearchFilter').val(), null, null, null, 8);
})();