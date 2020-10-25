import React, {Component} from "react"
import logo from './logo.svg';
import './App.css';
import image from './image.jpg'

class App extends Component {
    
    state={
      fullName:"Ali sghari ",
      bio: "time is money",
      profession: "Futur full-stack devoloper",
      imgSrc: image ,
      time:0,
      show: false,
  };


componentDidMount(){
  setInterval(()=>{
    let time = new Date()
    time = time.getHours()+':'+time.getMinutes()
    this.setState({time:time})
  },1000)
}
  


hide(){
  this.setState({
    show: !this.state.show
  })
}
   render() {
    return(
     <>

     {
        this.state.show &&
        <div>
     <h3>fullName :  {this.state.fullName}</h3>
      <h3>bio  : {this.state.bio}</h3>
      <h3>profession  : {this.state.profession}</h3>
         <img src={this.state.imgSrc}/>
   
        <h1>Bonjour</h1>
        <h2>Il est {this.state.time}.</h2>
        </div>
        
     }
        <button onClick={()=>this.hide()}> show</button>
      
     </>
     );
     
    }
  }
  

export default App ;