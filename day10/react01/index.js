//  <div id="outer">
//     <div id="inner1">
//         <div id="span-container">
//             <span>span 1</span>
//             <span>span 2</span>
//         </div>
//     </div>
//  </div>
//  const react = React.createElement("div",{id:"outer"},
//     React.createElement("div",{id:"inner1"},
//         React.createElement("div",{id:"span-container"},

// [
//     React.createElement("span",{}, "span 1"),
//     React.createElement("span",{}, "span 2")
// ]
//          )
//          )
//         )
const  react=<div id="outer">
    
    <div id="inner1">
        <div id="span-container">
            <span className="span-1">span 1</span>
            <span className="span-2">span 2</span>
        </div>
    </div>
    <div id="inner2">
        <div id="span-container2">
            <span >span 1</span>
            <span>span 2</span>
        </div>
    </div>
    <div id="inner3">
        <div id="span-container2">
            <span>span 1</span>
            <span>span 2</span>
        </div>
    </div>
 </div>
 const root = ReactDOM.createRoot(document.getElementById('root'));
// const divElement = React.createElement('div', {}, 'hello react learners');
root.render(react);