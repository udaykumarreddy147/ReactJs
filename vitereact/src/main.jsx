import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp()
// {
//     return(
//       <h1>inside the main.js</h1>
//     )
// }


// const anotherElement = (
//   <a href="https://google.com" target="_blank"> Visit Google </a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href:"https://google.com",target:"_blank"},
//   'visit google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    <App />

    // reactElement

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
