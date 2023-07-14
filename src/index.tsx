import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
// import './common/i18n';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(1);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
