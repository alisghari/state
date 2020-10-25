import React, {Component} from "react"
import logo from './logo.svg';
import './App.css';
import image from './image.jpg'

class App extends Component {
 
  constructor(){
    super()
    this.state= {
      fullName:"Ali sghari ",bio: "time is money",profession: "Futur full-stack devoloper " ,imgSrc: image ,date: new Date(),show: false
    };
  }
componentDidMount() {

}
componentUnMount() {
 
}
hide(){
  this.setState({
    show: true
  })
}
   render() {
    return(
     <>

     {
        this.state.show?
        <div>
     <h3>fullName :  {this.state.fullName}</h3>
      <h3>bio  : {this.state.bio}</h3>
      <h3>profession  : {this.state.profession}</h3>
     <img src={this.state.imgSrc}/>
   
        <h1>Bonjour</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        :null
     }
        <button onClick={()=>this.hide()}> show</button>
      
     </>
     );
    }
  }

export default App ;