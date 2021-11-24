import  React,{useEffect,useState} from 'react';
import axios from 'axios';
import browser from 'webextension-polyfill';

import './styles.scss';

function openWebPage(url) {
  return browser.tabs.create({url});
}

const Popup = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get('/api/user').then(res => {
      setUser(res.data);
    });
  },[]);
  return (
    <section id="popup">
      <h2>{document.title}</h2>
      <button
        id="options__button"
        type="button"
        onClick={() => {
          return openWebPage('options.html');
        }}
      >
        Options Page
      </button>
      {/* <div cldivassName="links__holder">
        <ul>
          <li>
            <button
              type="button"
              onClick={() => {
                return openWebPage(
                  'https://github.com/abhijithvijayan/web-extension-starter'
                );
              }}
            >
              GitHub
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                return openWebPage(
                  'https://www.buymeacoffee.com/abhijithvijayan'
                );
              }}
            >
              Buy Me A Coffee
            </button>
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default Popup;
