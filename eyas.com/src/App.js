import React from 'react';               // Import React for JSX support
import Card from './components/Card';    // Import the Card component you created
import logo from './logo.svg';           // Import the React logo
import './App.css';                      // Import the default styles

function App() {
  return (
    // contains the app
    <div className="App">

      {/* Header section */}
      <header className="App-header">
      
       {/* headder for this app 
       h1 is the big headder */}
        <h1>Eyas.com!</h1>
        
        {/* React logo image */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Your custom Card component displayed below */}
        {/* Your custom reusable Card components */}
        <Card title="Welcome!" content="This is your first custom card." />
        <Card title="About Us" content="We use data to solve cool problems." />
        <Card title="Contact" content="Reach out to Eyas at eyas.com/contact." />
      </header>
    </div>
  );
}

export default App;
