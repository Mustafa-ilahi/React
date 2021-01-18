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
      name: "Mustafa Ilahi",
      email : "mustafa@gmail.com"
    }
  }
  // changeName = () =>{
  //   // console.log("Hello")
  //   this.setState({
  //     name : "Hello Pakistan"
  //   })
  // }

  setValue = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    // console.log(e.target.value);
  }

  render(){
    return(
      <div>
        {/* State Practice */}
         {/* <h1>{`Name: ` +this.state.name}</h1>
        <h2>{`Email: ` + this.state.email}</h2>
         <input type="text" name="name" placeholder="Enter Name" onChange={(e) => this.setValue(e)}/>
         <input type="text" name="email" placeholder="Enter Email" onChange={(e) => this.setValue(e)}/> */}
        {/* <input name="name" type="text" onChange={(e) => this.setState({name:e.target.value})}/> */}
        {/* <button  onClick={this.changeName}>Change Name</button> */} 
          {/* <h1 className="mainComponent">Main Component</h1>
          <Footer />
          <BasicTextFields />
          <ContainedButtons /> */} 

          {/* Props Practice */}
          {/* <Header name={this.state.name}/>
          <Footer email={this.state.email}/> */}
      </div>
    )
  }
}

export default App;
