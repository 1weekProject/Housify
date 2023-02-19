import React from 'react'
import { Navigate, useNavigate } from 'react-router';

function Items(props) {
  const navigate = useNavigate()

console.log(props.user);


  return (
<div className='itempage'>
 <>
 

<div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/295086540.jpg?k=8c176e4fe4857ac7b09d645414251c5b7316fceab6458ba7a6ad9c7d48f36d42&o=&hp=1" alt=""/>
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">Housify</span>
        <div class="blog-slider__title">Housify your income will got height initul they reach the sky</div>
        <div class="blog-slider__text">When it comes to home listings, words are only part of the story. Professional-quality staging photos also are essential to increasing consumer interest, and should be considered an integral component of your listing description.
One agent who recognizes the importance of professional listing photos is Gloria Matlin of Compass in Glencoe, IL.</div>
       <button onClick={()=>(navigate("/SignIn"))}>LogIn</button>
      </div>
    </div>
    
  </div>
  <div class="blog-slider__pagination"></div>
</div>


<div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        
        <img src="https://occ-0-990-2433.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABahfvTtGUNnksflV4eOd2qKtJ2QK-hYBFim3mEOIizqpY-l-7F7oUycSNvljoeASzkN9bMBTPFqdlATRIcwm1xoyPI9DJTY48qP5mQfKLXwRnS5oSYEanUYg.jpg?r=c18" alt=""/>
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">Housify</span>
        <div class="blog-slider__title">Housify your income will got height initul they reach the sky</div>
        <div class="blog-slider__text">When it comes to home listings, words are only part of the story. Professional-quality staging photos also are essential to increasing consumer interest, and should be considered an integral component of your listing description.
One agent who recognizes the importance of professional listing photos is Gloria Matlin of Compass in Glencoe, IL.</div>
       <button  onClick={()=>(navigate("/SignIn"))}>LogIn</button>
      </div>
    </div>
  </div>
  <div class="blog-slider__pagination"></div>
</div>


<div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/295091700.jpg?k=a422bf17f01b42397b3dff190c311ac003aaac3419878cf7aa1128a7c57a9ade&o=&hp=1" alt=""/>
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">Housify</span>
        <div class="blog-slider__title"> Housify your income will got height initul they reach the sky</div>
        <div class="blog-slider__text">When it comes to home listings, words are only part of the story. Professional-quality staging photos also are essential to increasing consumer interest, and should be considered an integral component of your listing description.
One agent who recognizes the importance of professional listing photos is Gloria Matlin of Compass in Glencoe, IL.</div>
       <button  onClick={()=>(navigate("/SignIn"))}>LogIn</button>
      </div>
    </div>
    
  </div>
  <div class="blog-slider__pagination"></div>
</div>



 






















 
 
 
 </>
</div>
  )}

export default Items
{/* {props.data.map((ele,index)=>{

return (

<div key={index} className="containerr">
	<div className="cardI">
		<figure className="card__thumb">
			<img src={ele.images[0]} alt="Picture by Kyle Cottrell" className="card__image"/>
			<figcaption className="card__caption">
				<h2 className="card__title">{ele.Adress}</h2>
        <h2 className="card__title">${ele.Price}</h2>
				<p className="card__snippet">{ele.description}</p>
				<a onClick={()=>(navigate("/SignUp"))} className="card__button">Read more</a>
			</figcaption>
		</figure>
	</div>
  </div>



)})} */}
 