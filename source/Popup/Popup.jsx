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
      <h2>{"Team TupleSquad"}</h2>
      <img className='fsorm-img'  style ={{filter: "blur(0px)"}}src='https://www.kindpng.com/picc/m/677-6776683_go-green-logo-png-raiffeisen-bank-transparent-png.png' alt="" />
      <p style={{textAlign:"center"}}>Green Shopping Intiative</p>
      <button
        id="options__button"
        type="button"
        onClick={() => {
          return openWebPage('options.html');
        }}
      >
        Suggest Green Items
      </button>
      <div cldivassName="links__holder">
        <ul>
          <li style={{textAlign:"center", cursor:"pointer"}}>
            <button
              type="button"
              onClick={() => {
                return openWebPage(
                  'https://github.com/mdb571/tuplesquad'
                );
              }}
            >
              GitHub
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Popup;
