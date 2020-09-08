import React from 'react';
import './App.css';

const Link = ({ title, to }) => (
  <li>
    <a href={to} title={title}>
      {title}
    </a>
  </li>
);

function App() {
  return (
    <div style={{ marginLeft: '1rem' }}>
      <h1>SO/Infra</h1>
      <ul>
        <Link title="Azure" to="https://portal.azure.com/startout.org.au" />
        <Link title="Homepage (DEV)" to="https://homepage.dev.soinfra.xyz" />
        <Link title="Homepage (PROD)" to="https://www.startout.org.au" />
        <Link title="Outlook" to="https://outlook.com/startout.org.au" />
        <Link title="Talk App" to="https://talk.startout.org.au" />
        <Link
          title="Workplace"
          to="https://auth.startout.org.au/samlp/9yIPyhfWgwoAGO1TmxFyVOMQtft3pfbs"
        />
      </ul>
    </div>
  );
}

export default App;
