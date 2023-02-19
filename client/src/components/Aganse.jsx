import React from 'react'
import { Navigate, useNavigate } from 'react-router';


function Aganse() {
  

  const handelclick = ()=>{
    axios.delete(`http://localhost:3000/api/housify/${props.user[0]._id}`).then
    ((result)=>{console.log(result)}).catch((err)=>{console.log(err);})
    }
  
  const navigate = useNavigate()
  return (
    <div className='aganse'>
      
      <aside>
  <p> Menu </p>
  <a onClick={()=>(navigate("/profile"))}>
    <i className="fa fa-user-o" aria-hidden="true"></i>
    Profile
  </a>
  <a onClick={()=>(navigate("/addproudect"))} >
    <i  className="far fa-edit" aria-hidden="true"></i>
    A Sell or Rent house
  </a>
  <a onClick={()=>(navigate("/Update"))} >
    <i className="fa fa-clone" aria-hidden="true"></i>
   Update  Profile
  </a>
  <a onClick={()=> (navigate("/userPosts"))}>
    <i className="fa fa-star-o" aria-hidden="true"></i>
   My all houses
  </a>
  <a onClick={()=>{handelclick()}} >
    <i className="fa fa-trash-o" aria-hidden="true"></i>
    Delete account
  </a>
</aside>

     
      <div className="containerrr">
  <ul className="cards">
    <li><img src="https://ca.slack-edge.com/T0483L108BH-U048V16SNNQ-cb5692bb4eaa-512"/>
      <div className="details"><span className="name">Farouk Mestiri</span><span className="title">Full stack developer</span><a className="phone" >123-456-789</a><a className="email">Housify@email.com</a></div>
    </li>
    <li><img src="https://ca.slack-edge.com/T0483L108BH-U048SEB23HQ-ed8605b67dd4-512"/>
      <div className="details"><span className="name"> Kais Machghoul </span><span className="title">Full stack developer</span><a className="phone" >123-456-789</a><a className="email">Housify@email.com</a></div>
    </li>
    <li><img src="https://ca.slack-edge.com/T0483L108BH-U04958DUXGR-680ceb6790cd-512"/>
      <div className="details"><span className="name">Amine rjab</span><span className="title">Full stack developer</span><a className="phone" >123-456-789</a><a className="email">Housify@email.com</a></div>
    </li>
    <li><img src="https://ca.slack-edge.com/T0483L108BH-U04953VKMDX-3b587064bd88-512"/>
      <div className="details"><span className="name">Mouhamed aziz </span><span className="title">Full stack developer</span><a className="phone" >123-456-789</a><a className="email">Housify@email.com</a></div>
    </li>
  </ul>
</div>


    </div>
  )
}

export default Aganse
