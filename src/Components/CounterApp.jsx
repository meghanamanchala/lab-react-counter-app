import  {Component} from "react";
export default class CounterApp extends Component {
constructor(props){
    super(props);
    this.state={count: 0};

}

handleAdd =  ()=>{
    this.setState({count: this.state.count+1})
};
handleMinus =  ()=>{
    this.setState({count: this.state.count-1})
};
handleReset =()=>{
    this.setState({count: 0})
};


    render(){
    return(
      <>
      <h1>Counter App Using Class Component</h1>
      <h1>Count: {this.state.count}</h1>
      <button 
      onClick={this.handleAdd}>+</button>
      <button
      onClick={this.handleMinus}>
        -</button>
      <button
      onClick={this.handleReset}>Reset</button>
      </>  
    )
}
}


