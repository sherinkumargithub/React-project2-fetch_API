import React from "react";
import { useState, useEffect } from "react";
import Form from './Form';
import List from './List';


function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/';
  // here this reqType denotes the users header button things like users, post and comment
  // users is the default one
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([])

  useEffect (() =>{

    const fetchItem = async ()=> {
      try{
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        setItems(data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchItem()
  }, [reqType])


  return (
    <div className="App">
      <Form reqType = {reqType} setReqType = {setReqType}/>
      <List items = {items} />
    </div>
  );
}

export default App;
