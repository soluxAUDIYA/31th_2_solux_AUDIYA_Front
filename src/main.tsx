import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import './shared/styles/tokens.css';
import './shared/styles/global.css';

async function enableMocking() {
  if (import.meta.env.VITE_USE_MOCK !== 'true') return;
  const { worker } = await import('./shared/mocks/browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
