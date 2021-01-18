import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BasicTextFields from './components/Form';
import ContainedButtons from './components/Button'


// Class Components
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "Mustafa",
      email: "mustafa@gmail.com"
    }
  }
  render(){
    return(
      <div>
        <h1>{`Welcome ` + this.state.name + `..!`}</h1>
          {/* <Header />
          <h1 className="mainComponent">Main Component</h1>
          <Footer />
          <BasicTextFields />
          <ContainedButtons /> */}
      </div>
    )
  }
}

export default App;
