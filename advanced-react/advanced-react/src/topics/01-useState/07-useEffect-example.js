
import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getDatas();
    },[])
        
       const getDatas = async () =>{
            const data = await fetch(url);
            const jsondata = await data.json();
            console.log(jsondata)
            setUsers(jsondata);                    
        }
        return(
            <div>
                {users.map((profile)=>{
                    const {id, login,avatar_url} = profile;
                    return (
                        <section>
                            <img src={avatar_url} alt="avatar"/>
                            <div>
                            <h2>{id}</h2>
                            <p>{login}</p>
                            </div>
                        </section>

                    )
                    
                })}
            </div>
        )
        
}

export default FetchData;