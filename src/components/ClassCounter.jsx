import React from 'react';

class ClassCounter extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }

    render(){ 
        return(
        <div>
            <p>{this.state.count}</p>
        <button onClick={()=> this.setState({count: this.state.count + 1}) }>Incriment</button>
		<button onClick={()=> this.setState({count: this.state.count - 1})}>Dicriment</button>
        </div>
        )
    }
}
export default ClassCounter;