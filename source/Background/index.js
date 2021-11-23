/* eslint-disable prettier/prettier */
import 'emoji-log';
import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener(async (msg, sender) => {
  console.log('BG page received message', msg, 'from', sender);
  console.log('Stored data', await browser.storage.local.get());
});

browser.runtime.onInstalled.addListener(() => {
  console.emoji('🦄', 'extension installed');
});
