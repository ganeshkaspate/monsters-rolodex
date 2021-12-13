import React, { Suspense, ReactNode, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot} from 'recoil'
import '@blueprintjs/core/lib/css/blueprint.css';
import { useRecoilState, useRecoilSnapshot, useRecoilCallback } from "recoil"
import { Button } from '@blueprintjs/core';



ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <DebugButton/>
    <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

function DebugButton(): React.node {
  const onClick = useRecoilCallback(({snapshot}) => async () => {
    console.debug('Atom values:');
    for (const node of snapshot.getNodes_UNSTABLE()) {
      const value = await snapshot.getPromise(node);
      console.debug(node.key, value);
    }
  }, []);

  return <div style={{marginTop:'10px', marginLeft:'auto', marginRight:'auto', width:'100px'}}>
          <Button intent="danger" onClick={onClick}>Check State </Button> 
          </div> 
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
