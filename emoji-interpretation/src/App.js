import './App.css';

import HeaderTitle from './components/HeaderTitle'
import Emojis from './components/EmojiPanel'
import FooterContent from './components/FooterContent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderTitle />
      </header>
      <div className="App-body">
        <Emojis />
      </div>
      <footer>
        <FooterContent />
      </footer>
    </div>
  );
}

export default App;
