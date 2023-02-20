import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Routes ,Switch} from 'react-router-dom'
import $ from 'jquery'
import SignUp from './components/SignUp.jsx'
import { Container } from 'react-bootstrap'
import SignIn from './components/SignIn.jsx'
import Items from './components/Items.jsx'
import axios from 'axios'
import Profile from './components/Profile.jsx'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Search from './components/Search.jsx'

import AddLocation from "./components/AddLocation.jsx"
=======
import Update from './components/Update.jsx'
import Userposts from './components/Userposts.jsx'
import Addproudect from './components/Addproudect.jsx'
import Aganse from './components/Aganse.jsx'


 


const App = () => {
  const [user, setUser] = useState([])
  const [data,setdata]=useState([])
  const [relod,Setrelod]=useState(false)

  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setUser(data)
      },
      headers : {"authorization" : localStorage.getItem("bearer")},
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

  useEffect(()=> {
    axios.get("/api/housify").then((result)=>{
    setdata(result.data)}).catch((err)=>{
    console.log(err);
    })},[relod])


  const search = (query) => {
    console.log(query);
let newData = user.filter((e) => {
      return e.for.toLowerCase().includes(query.toLowerCase());
    });
    setItems(newData);
  };
return (
    <div>
     
       <BrowserRouter>
    
     <nav> 
       <ul>    
        <li> <Link to="/"  style={{marginLeft:"30px"}}>Home</Link> </li>  
      <li><Link to="/about"  style={{marginLeft:"30px"}}>About us</Link></li>

     </ul>
    <Search search={search}/>
     </nav>
     <Routes>

     </Routes>
    
     </BrowserRouter>
     

     
    </div>
   )

  
}

ReactDOM.render(<App />, document.getElementById('app'))
