import React from "react"
import { useState } from "react";
// import resList from "../utils/mockData"
import RestaurentCard from "./RestaurentCard"




const Body =() =>{
    //state variable , it is like state of the variable.
    //super powerful variable
    //const
    //Normal Js variable






    const [listOfRestaurant,setListOfRestaurant]=useState([{
        data: {    
            id : "334475",
            name: "paradise",
            cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 36,
            avgRating : "3.8"
        }
    }, {
        data: {    
            id : "334476",
            name: "Eat panchavat",
            cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 20,
            avgRating : "4.3"
        }
    },
    {
        data: {    
            id : "334477",
            name: "Dominos",
            cloudinaryImageId: "uughlfbnykdtvefbmhdm",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 40,
            avgRating : "4.4"
        }
    },
    {
        data: {    
            id : "334478",
            name: "kritunga",
            cloudinaryImageId: "uughlfbnykdtvefbmhdm",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 40,
            avgRating : "3.9"
        }
    },
    {
        data: {    
            id : "334479",
            name: "Suprabhat",
            cloudinaryImageId: "uughlfbnykdtvefbmhdm",
            cuisines : ["Burgers","Biryani", "American", "Snacks"],
            costForTwo: 40000,
            deliveryTime : 40,
            avgRating : "3.5"
        }
    }]);




// let listOfRestaurantJs =[
//     {
//         data: {    
//             id : "334480",
//             name: "Eat panchavat",
//             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTimee : 36,
//             avgRating : "3.8"
//         }
//     },
//     {
//         data: {    
//             id : "334476",
//             name: "Eat panchavat",
//             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTimee : 36,
//             avgRating : "4.2"
//         }
//     },
//     {
//         data: {    
//             id : "334477",
//             name: "Dominos",
//             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//             cuisines : ["Burgers","Biryani", "American", "Snacks"],
//             costForTwo: 40000,
//             deliveryTimee : 36,
//             avgRating : "4.4"
//         }
//     }
// ];


    return (
        <div className='body'>
            <div className='search'>
                <button className="filter-btn"
                onClick={()=>{
                    // console.log("clicked")
                    //filter logic need to write here
                    let filteredList=listOfRestaurant.filter(resData=> resData.data.avgRating>4)
                    setListOfRestaurant(filteredList);
                   console.log(filteredList)
                    }}>
                Top Rated Restaurant


                </button>
            </div>
            <div className='res-container'>
           
            {/* when ever you are looping you need to pass a key  */}
            {
                listOfRestaurant.map((restaurant) => (
                    <RestaurentCard  key={restaurant.data.id} resData={restaurant} />
                ))
            }
                {/* <RestaurentCard resData={resObj} /> */}
               
         
            </div>
        </div>
    )
}




export default Body


