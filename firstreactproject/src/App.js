import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BasicTextFields from './components/Form';
import ContainedButtons from './components/Button'


// Class Components
class App extends React.Component{
  render(){
    return(
      <div>
          <Header />
          <h1 className="mainComponent">Main Component</h1>
          <Footer />
          <BasicTextFields />
          <ContainedButtons />
      </div>
    )
  }
}

export default App;
