import {useState} from 'react';
const Question = ({id, title, info}) => {
    const[selected, setSelected] = useState(false);

   
    return(
      <div className="eachquestion">
        <div className="buttonStyle">
        <h3>{title}</h3>
        <button className="buttonElm" onClick={()=>setSelected(!selected)}>click</button>
        </div>
              
        {selected && <p>{info}</p>}
      </div>
    )
}

export default Question;