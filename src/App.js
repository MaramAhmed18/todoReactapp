
import React, {Component} from "react";
import Additems from "./componants/Additems/Additems";
import Todoitems from "./componants/Todoitems/Todoitems";
class App extends Component{
  state={
    items: [
      {id:1, name:'Maram', age:22},
      {id:2, name:'Ahmed', age:45},
      {id:3, name:'Alaa', age:21},
    ]
  }
  deleteitem= (id)=>{
   let items= this.state.items.filter(item =>{
    return item.id !== id;
  }) 
  this.setState({items:items})
  }
  additem= (item)=>{
    item.id= Math.random();
    let items= this.state.items;
    items.push(item)
    this.setState({items:items})


  }
  render(){
    return(
      <div className="container">
        <h1 className="header">Todo List</h1>
        <Todoitems items= {this.state.items} deleteitem= {this.deleteitem} />
        <Additems additem= {this.additem}/>
      </div>
    )
  }
}

export default App;
