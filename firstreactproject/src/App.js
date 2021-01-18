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
      name: "Hello World",
      // email: "mustafa@gmail.com"
    }
  }
  changeName = () =>{
    // console.log("Hello")
    this.setState({
      name : "Hello Pakistan"
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <button  onClick={this.changeName}>Change Name</button>
        {/* <h2>{`Email: ` + this.state.email}</h2> */}
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
