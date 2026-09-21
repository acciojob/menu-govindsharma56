import React, { useEffect, useState } from 'react'
import data from './Data'
import '../styles/App.css'
const App = () => {
    let [dish,setDish]=useState(data)
    const [display, setDisplay] = useState(data);
      function handleClick(cate){
             if(cate==='all'){
                console.log('button clicked');
                 setDisplay(dish);
             }
             else{
              let sorted=dish.filter((dish)=>dish.category===cate)
              setDisplay(sorted)   
             }
  
      }
      useEffect(()=>{
          console.log(display)
      },[display])
  return (
    <div id="main">
       <h2 style={{textAlign:"center",color:'blue'}}>Our Menu</h2>
       <div className='allbutton' style={{marginTop:'10px'}} >
              <button  onClick={()=>{handleClick('all')}}>All</button>
              <button id='#filter-btn-2' onClick={()=>{handleClick('lunch')}}>Lunch</button>
              <button id='#filter-btn-1' onClick={()=>{handleClick('breakfast')}}>Breakfast</button>
              <button  id='#filter-btn-3'onClick={()=>{handleClick('shake')}}>Shake</button>
       </div>  
           <div className="section-center" style={{marginTop:'40px'}}>
              {display.map((item)=>(
                            <article className="menu-item "  key={item.id} data-test-id={`menu-item-${item.category}`}>
                            <img src={item.img} height={100} width={100}  className="photo" />
                            <div className="item-info">
                                <header>
                                    <h4>{item.title}</h4>
                                    <h4 className="price">${item.price}</h4>
                                </header>
                                <p className="item-text">{item.desc}</p>
                            </div>
                        </article>
              ))}
            </div> 
    </div>
  )
}

export default App