import React from 'react'; // Import React for JSX support
import Card from './components/Card';    // Our simple Card component
import logo from './logo.svg';           // React logo shown in the header
import './App.css';                      // Global styles for the app

function App() {
  // -------------------------------------------------------------------------
  // Card data for this page.  Simply edit the objects below to change the
  // displayed cards.  Each object must contain a `title` and `content` field.
  // -------------------------------------------------------------------------
  const cards = [
    { title: 'Card 1', content: 'content card 1' },
    { title: 'Card 2', content: 'content card 2' },
    { title: 'Card 3', content: 'content card 3' }
  ];

  return (
    <div className="App">
      {/* Main header section */}
      <header className="App-header">
        <h1>Eyas.com!</h1>
        <img src={logo} className="App-logo" alt="logo" />

        {/* Container holding all cards side by side */}
        <div className="card-container">
          {cards.map((card) => (
            <Card key={card.title} title={card.title} content={card.content} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
