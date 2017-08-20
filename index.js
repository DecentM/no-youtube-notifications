// ==UserScript==
// @name         No YouTube notifications
// @namespace    http://decentm.net/
// @version      1.0
// @description  Remove the notification counter from YouTube's title
// @author       DecentM
// @include      https://youtube.com/*
// @include      https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function(window, document, undefined) {
  'use strict';

  const target = document.querySelector('title');
  const observerOptions = {
    'characterData': true,
    'subtree': true,
    'childList': true
  };

  const observer = new MutationObserver((mutations) => {
    const oldTitle = mutations[0].target.innerHTML;
    const newTitle = oldTitle.replace(/\((.*?)\)\ /, '');

    observer.disconnect();
    document.title = newTitle;
    observer.observe(target, observerOptions);
  });

  observer.observe(target, observerOptions);

})(window, window.document);

