import React, {useState} from 'react';

const Counter = () => {
    let [count, setCount] = useState(0);

    return(
        <div>
            <p>{count}</p>
        <button onClick={()=> setCount(count +=1) }>Incriment</button>
		<button onClick={()=> setCount(count -=1)}>Dicriment</button>
        </div>
    )
}

export default Counter;