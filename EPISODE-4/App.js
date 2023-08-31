
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () =>{
    return(
        <div className='header'>
            <div className='logo'>
            <img  className="logo" alt="logo-image" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg" />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestarentCard = (props) =>{
    return (
        <div className='res-card' style={{backgroundColor : "#f0f0f0" }}>
        <img className="res-logo" alt="res-logo" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken-500x500.jpg"/>
        {/* <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.4 Stars</h4>
        <h4>38 minutes</h4> */}

        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h3>4 Stars</h3>
        <h3>40 Mnts</h3>
        </div>
    )
}

const Body = () => {
    return(
    <div className='body'>
        <div className='search'>
            Search
        </div>
        <div className='res-container'>
            <RestarentCard resName="Bawarchi" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Moghal" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Teams" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Bawarchi" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Moghal" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Teams" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Bawarchi" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Moghal" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Teams" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Bawarchi" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Moghal" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Teams" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Bawarchi" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Moghal" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Teams" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Bawarchi" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Moghal" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Teams" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Bawarchi" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Moghal" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Teams" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Bawarchi" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Moghal" cuisine="Mutlicuisine"/>
            <RestarentCard resName="Teams" cuisine="Mutlicuisine"/>
        </div>
    </div>
    )
}


const ApplyLayout = ()=>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
            
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplyLayout/>)



