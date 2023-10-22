import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
 //  le constructeur est  appelé de la creation  de COMPONENT 
   
    this.state = {

      Person:{
        fullName:"messi",
        bio:'ab',
        imgSrc:"https://i0.wp.com/blog.confirmbets.com/wp-content/uploads/2019/07/Messi.jpg?w=1080&ssl=1",
        profession:"athlete"

      },
      show :false,
      interval:0,
    }
  }

  componentDidMount() {
    //  le componenet est inséré dans LE DOUCEMENT OBJECT MODEL
    this.intervalId = setInterval (
      ()=>{this.setState({interval:this.state.interval + 1})}
      , 1000
      )
  }

  componentWillUnmount () {
    //  le component est retiré du DOM
    console.log("beforeClear",this.state.interval)
    clearInterval(this.intervalId)
    console.log("AfterClear",this.state.interval)
  }

   togleShow = ()=> {
    this.setState({show: !this.state.show})
    console.log("show",this.state.show)

  }
 

  render() {
    return (
      <div>
       <h1>
         CheckPoint State
        </h1>
   <button onClick={this.togleShow} > Display Profile </button>
      {
        this.state.show &&(
          <div>
       <h1> { this.state.Person.fullName} </h1>
       <h1> { this.state.Person.bio} </h1>
       <h1> { this.state.Person.profession} </h1>
       <img src={this.state.Person.imgSrc} alt="pic"/>
          </div>
        )
      }

      <p> Time Interval since Mount : {this.state.interval} seconds</p>
      </div>
    )
  }
}

export default App 