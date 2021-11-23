var browser = require("webextension-polyfill");

console.log('helloworld from content script');

const header = document.createElement("h1");
header.innerHTML = "Christmas!";

const body = document.getElementsByTagName("body");
body[0]?.prepend(header);

console.log(document.title);

export {
    
};
