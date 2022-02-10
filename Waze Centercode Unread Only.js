// ==UserScript==
// @name         Waze Centercode Unread Only on Github
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sets UNREAD ONLY checkbox on each time you enter a subforum
// @author       francrubio
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
