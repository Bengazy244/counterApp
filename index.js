import { Component } from "react";
import './index.css';


class CounterApp extends Component {
    
    state={count:0}
    
    reset=()=>{
        this.setState({count:0})
    }
    

    onIncrement=()=>{
        this.setState({count:this.state.count+5})
    };

    onDecrement=()=>{
        this.setState({count:this.state.count-5})
    };


    render(){
        const {count}=this.state
        return(
        <div className="app-container">
           <div className="content-container">
            <h1 className="heading">Simple counter App</h1>
            <button className="counter">Counter - {count}</button>
            <div>
            <button className="reset-button" type="button" onClick={this.reset}>Reset</button>
                <button className="increase-button" type="button" onClick={this.onIncrement}>Increment</button>
                <button className="decrease-button" type="button" onClick={this.onDecrement}>Decrement</button>
            </div>
               
            </div>
        </div>
        )
    }
}

export default CounterApp;