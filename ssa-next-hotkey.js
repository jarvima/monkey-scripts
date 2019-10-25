// ==UserScript==
// @name         SSA Next Shortcut
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://secure.ssa.gov/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener('keypress', function(event) {
      //console.log('key was pressed:', event);
        if (event.ctrlKey && event.charCode == 46) {
            document.querySelector('input[type="submit"]').click();
        }
    });
})();
