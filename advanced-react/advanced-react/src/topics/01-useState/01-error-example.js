import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from'react';

const ErrorExample = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count+1)
        console.log(count)
    }
    return(
        <div>
            <h2>You Clicked {count} times</h2> 
            <button type='button' onClick={handleClick} className='btn btn-primary'>
                increament
            </button>

        </div>
    )
}

export default ErrorExample;