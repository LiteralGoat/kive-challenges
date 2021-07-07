import './App.css';

import Emojis from './components/EmojiPanel'

import HeaderTitle from './components/HeaderTitle'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderTitle />
      </header>
      <div className="App-body">
        <Emojis />
      </div>
      <footer style={{ color: '#9ca3af', paddingBottom: '100px' }}>
        Emoji data powered by <a style={{color: '#9ca3af', }} rel="noreferrer" target="_blank" href="https://emoji-api.com/">Open Emoji API</a>
      </footer>
    </div>
  );
}

export default App;
