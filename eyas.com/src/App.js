import React from 'react';               // Import React for JSX support
import Card from './components/Card';    // Import the Card component you created
import logo from './logo.svg';           // Import the React logo
import './App.css';                      // Import the default styles

function App() {
  return (
    // Outer container
    <div className="App">
      
      {/* New header added here */}
      <h1>Hello, this is my first React app!</h1>

      {/* Header section */}
      <header className="App-header">
        
        {/* React logo image */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Sample paragraph */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* Link to React docs */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Your custom Card component displayed below */}
        <Card />
      </header>
    </div>
  );
}

export default App;
