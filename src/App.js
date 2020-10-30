import React from 'react'
import InfoBox from "./InfoBox";


class App extends React.Component {
   constructor(){
     super()
     this.state={style:"primary"}
   }




   changeStyle=(data)=>{
     this.setState({style:data});
   }


  render(){
    return (
      <div className="container">
        <div>
           <h2 className="title is-3">Change Card Style : </h2>
           <button className="button is-primary" onClick={()=>this.changeStyle("primary")}>Primary</button>
           <button className="button is-danger" onClick={()=>this.changeStyle("danger")}>Denger</button>
        </div>
        <InfoBox  />
      </div>
    )
  }
}

export default App;
