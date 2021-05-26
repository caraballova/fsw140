import React from 'react'
import axios from 'axios'
import './App.css';

function App() {
  function getAllData(){
    axios.get('/alldata')
    .then(res => {
      mapItToPage(res.data)
      console.log(res.data)
    })
  }

  function mapItToPage(arr){
    arr.map(item => {
      let x = document.getElementById("App")
      let y = document.createElement('h3')
      y.id="item"
      y.innerHTML = `Product: ${item.products} Price: ${item.price}`
      x.append(y)
    })
  }
  return (
    <div id="App">
      <h2>Press this button to interact with the database.</h2>
      <button onClick={getAllData}>Click Me</button>
    </div>
  );
}

export default App;