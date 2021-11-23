/* eslint-disable prettier/prettier */
import browser from 'webextension-polyfill';

console.log('helloworld from content script');

browser.storage.local
  .set({
    [window.location.hostname]: document.title,
  })
  .then(() => {
    browser.runtime.sendMessage(
      `Saved document title for ${window.location.hostname}`
    );
  });
export { };
