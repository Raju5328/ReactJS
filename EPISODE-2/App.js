

// const heading = React.createElement("div", {class :"parent"},[
//      React.createElement("div", {class:"child"},[
//         React.createElement("h1",{class:"heading"}, "Hello, welcome to react heading inside"),
//         React.createElement("h1",{class:"heading"}, "Hello, welcome to react heading inside"),
//      ]),
//      React.createElement("div", {class:"child"},[
//         React.createElement("h1",{class:"heading"}, "Hello, welcome to react heading inside"),
//         React.createElement("h1",{class:"heading"}, "Hello, welcome to react heading inside"),
//      ])
//     ]);


// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)




// let heading= document.createElement("h1");


// heading.textContent="hi hello welcome to js element"


// document.body.appendChild(heading);




// {/* <div id ="style">
//    <div id="child">
//       <h1 class="heading">welcome to inner heading</h1>
//    </div>
// </div> */}


const parent = React.createElement(
   "div",
   {id : "style"},
   React.createElement(
      "div",
      {id: "child"},
      React.createElement("h1", {class : 'heading'}, "Welcome to inner heading")
   )
);




const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
