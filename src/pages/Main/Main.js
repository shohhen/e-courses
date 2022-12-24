import React from 'react'
import './main.css'
import { useEffect, useState } from "react";
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import { Courses } from '../Courses/Courses';

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products?limit=4`
    )
      .then((res) => res.json())
      .then((json) =>setData(json));
  }, []);

    function importAll(r) {
      let images = {};
       r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
      return images
     }
     const images = importAll(require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/));

     const navigate = useNavigate();

     const navigateCourses = () => {
      navigate('/courses')
     }
     
    return (
      <main>
        <div className="success-box">
          <div className="container">
            <div className="success">
              <div className='success-text'>
                <h3>START TO SUCCESS</h3>
                <h2>Access To 5000+ Courses
                    from 300 Instructors 
                    & Institutions
                </h2>
                <p>Various versions have evolved over the years, sometimes by accident,</p>
                <input type="search" placeholder = {"What do want to learn?"} />
              </div>
              <div className='success-img'>
                <img src={images['Saly-10.png']} alt="Saly" />
              </div>
            </div>
            
          </div>  
        </div>
        <div className="numbers">
          <div className='container'>
            <div className="number-list">
              <div className='number'>
                <div style={{backgroundColor: "#20B486"}}><img src={images['GraduationCap.png']} alt="" /></div>
                <div>
                  <h3>300</h3>
                  <p>Instructors</p>
                </div>
              </div>
              <div className='number'>
                <div style={{backgroundColor: "#6D3AE9"}}><img src={images['Users.png']} alt="" /></div>
                <div>
                  <h3>20,000+</h3>
                  <p>Instructors</p>
                </div>
              </div>
              <div className='number'>
                <div style={{backgroundColor: "#EE455A"}}><img src={images['VideoCamera.png']} alt="" /></div>
                <div>
                  <h3>1,00,000+</h3>
                  <p>Instructors</p>
                </div>
              </div>
              <div className='number'>
                <div style={{backgroundColor: "#21C9FF"}}><img src={images['UsersThree.png']} alt="" /></div>
                <div>
                  <h3>10,000+</h3>
                  <p>Instructors</p>
                </div>
              </div>
              </div>
            </div>
        </div>
        <div className="popular-box">
          <div className="container">            
            <div className="popular"> 
              <div className='popular-descr'><h3>Most <span>Popular Courses</span></h3>
              <p>Various versions have evolved over the years, sometimes by accident</p></div>

            <div className="popular-list">
              {data.length
            ? data.map((e) => (
                <div key={e.title} className="popular-item" onClick={navigateCourses}>
                  <img
                    className="popular-img"
                    src={`${e.image}`}
                    alt=""
                    style={{width:'280px;', height:'207px'}}
                  />
                  <p className="popular-title">{e.title}</p>
                </div>
              ))
            : "Loading"}
             
             
            </div>
            </div>  
           <Routes>
              <Route path='/courses' element={<Courses />}/> 
           </Routes>
          </div>
        </div>
        <div className="join-box">
          <div className="container">
            <div className="join">
              <div>
                <img src={images['Saly-1.png']} alt="" />
              </div>
              <div>
                <h2>Join <span> World's largest</span> learning platform today</h2>
                <h3>Start learning by registering for free</h3>
                <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. 
Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis</p>
                <NavLink className={'signup'} to={""} >Sign up for free</NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

