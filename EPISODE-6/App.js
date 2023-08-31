import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component";
import "./App.js"

const App = () =>{
    const data = [
        {
            id:1,
            name:"Prabhas",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IdIJLVXGTDa8agQ6wogKgCZOaw9ttNsWJQ&usqp=CAU",
            rank: 1
        },
        {
            id:2,
            name:"Mahesh Babu",
            imageUrl:"https://pbs.twimg.com/media/E8RF3nDVgAEpt3x.jpg",
            rank: 2
        },
        {
            id:3,
            name:"Pawan Kalyan",
            imageUrl:"https://w0.peakpx.com/wallpaper/393/725/HD-wallpaper-pawan-hero-pawankalyan.jpg",
            rank: 3
        },
        {
        id:1,
        name:"Prabhas",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IdIJLVXGTDa8agQ6wogKgCZOaw9ttNsWJQ&usqp=CAU",
        rank: 1
        },
        {
        id:2,
        name:"Mahesh Babu",
        imageUrl:"https://pbs.twimg.com/media/E8RF3nDVgAEpt3x.jpg",
        rank: 2
        },
        {
        id:3,
        name:"Pawan Kalyan",
        imageUrl:"https://w0.peakpx.com/wallpaper/393/725/HD-wallpaper-pawan-hero-pawankalyan.jpg",
        rank: 3
        },
        {
            id:1,
            name:"Prabhas",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IdIJLVXGTDa8agQ6wogKgCZOaw9ttNsWJQ&usqp=CAU",
            rank: 1
            },
            {
            id:2,
            name:"Mahesh Babu",
            imageUrl:"https://pbs.twimg.com/media/E8RF3nDVgAEpt3x.jpg",
            rank: 2
            },
            {
            id:3,
            name:"Pawan Kalyan",
            imageUrl:"https://w0.peakpx.com/wallpaper/393/725/HD-wallpaper-pawan-hero-pawankalyan.jpg",
            rank: 3
            },
            {
                id:1,
                name:"Prabhas",
                imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IdIJLVXGTDa8agQ6wogKgCZOaw9ttNsWJQ&usqp=CAU",
                rank: 1
                },
                {
                id:2,
                name:"Mahesh Babu",
                imageUrl:"https://pbs.twimg.com/media/E8RF3nDVgAEpt3x.jpg",
                rank: 2
                },
                {
                id:3,
                name:"Pawan Kalyan",
                imageUrl:"https://w0.peakpx.com/wallpaper/393/725/HD-wallpaper-pawan-hero-pawankalyan.jpg",
                rank: 3
                }

    ]

    return(
        
        <div className="app">
            {
                data.map((each)=>(
                    <Component
                    key = {each.id}
                    name = {each.name}
                    imageUrl = {each.imageUrl}
                    rank = {each.rank}
                    />
                ))
                // <Component name="Prabhas" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IdIJLVXGTDa8agQ6wogKgCZOaw9ttNsWJQ&usqp=CAU " />
            }
        </div>
    )


    
}


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)