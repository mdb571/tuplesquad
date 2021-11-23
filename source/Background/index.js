import 'emoji-log';
import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(() => {
  console.emoji('🦄', 'extension installed');
});

// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// // A function to use as callback
// function doStuffWithDom(domContent) {
//     console.log('I received the following DOM content:\n' + domContent);
// }

// // When the browser-action button is clicked...
// browser.browserAction.onClicked.addListener(() => {
//     // ...check the URL of the active tab against our pattern and...
//     console.log('clickeddddd')
//     if (urlRegex.test(tab.url)) {
//         // ...if it matches, send a message specifying a callback too
//         chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
//     }
// });