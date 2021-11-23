var browser = require("webextension-polyfill");

console.log('helloworld from content script');

const header = document.createElement("h1");
header.innerHTML = "Christmas!";

const body = document.getElementsByTagName("body");
body[0]?.prepend(header);

console.log(document.title);

export {
    
};
/* eslint-disable prettier/prettier */


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
