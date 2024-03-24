import {useState} from 'react';


const Question = ({id, title, info}) => {
    const[selected, setSelected] = useState(()=>(null));
   

    const handleSingleSelection = (getCurrentId) =>{
        // console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
   

    console.log(selected)
    return(
      <div className="eachquestion">
        <div className="buttonStyle">
        <h3 onClick={()=> handleSingleSelection(id)}>{title}</h3>
        {/* <button className="buttonElm">click</button> */}
        </div>
        
        {selected === id ? (
            <div>
                {info}
            </div>) : null}
              
        {/* <p>{info}</p> */}
      </div>
    )
}

export default Question;