import {useState} from 'react';

const UseStateObject = ()=> {
    const [person,setPerson] = useState({
        name : "Raju",
        age : 31,
        hobby : "Content-Explorer" ,
    });

    const displayPerson = () =>{
        setPerson({name:'john', age:28, hobby:'screem at computer'});
    }
return(
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys : {person.hobby}</h4>
      <button onClick={displayPerson}>
        show John
      </button>
    </>
)
}



//     return(
//         <>
//             <h3>{person.name}</h3>
//             <h3>{person.age}</h3>
//             <h4>Enjoys : {person.ho</h4>
//         </>
//     )
// }
//      const ObjList = [
        
//              name : "Raju",
//              age : 31,
//              Hobby : "Content-Explorer" 
//          },
//          {
//             name : "Hema",
//             age : 26,
//             Hobby : "Listening to music" 
//         },
//         {
//             name : "Raju",
//             age : 31,
//             Hobby : "Content-Explorer" 
//         }
    
//     ]

//      return(
//         <div>
//             {ObjList.map((list)=>{
// //                 // const {name,age,Hobby} = list;
//                 return(
//                     <div>
//                         <h2>{list.name}</h2>
//                         <h3>{list.age}</h3>
//                         <p>{list.Hobby}</p>
//                     </div>
//                 )
                

//             })}
//         </div>
//     )
// }

export default UseStateObject;