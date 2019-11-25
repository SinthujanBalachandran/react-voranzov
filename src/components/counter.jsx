import React, { Component } from 'react';
import Buttons from './buttons';
import Display from './display';
import {connect} from 'react-redux';
import {increment,decrement} from './counterAction'
const mapStatusToProps=(state)=>({
    Count:state.Count
})

const mapDispatchToProps ={
    increment,
    decrement
}
class counter extends Component {

//     state = {
//         value: 4
//     }
// handleIncrement=()=>{
//     this.setState({value: this.state.value+1});
// }
// handleDecrement=()=>{
//     this.setState({value:this.state.value-1})
// }
// handleReset=()=>{
//     this.setState({value:0})
// }

    render() {
console.log(this.props.Count);
// const {value} = this.state;
        return (
            <div>

                <Display value={this.props.Count} />
                <Buttons onIncrement={this.props.increment} onDecrement={this.props.decrement} onReset={this.handleReset}/>

            </div>
        );
    }
    
}

export default connect(mapStatusToProps,mapDispatchToProps)(counter);
