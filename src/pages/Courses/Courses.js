import React from 'react'
import { useNavigate, Route, Routes, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Courses = () =>  {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products?limit=1`
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
    <div className='course-box'>
      <div className="container">
        <div className="category">
          <div className="course-text">
            <h2>Algebra</h2>
            <h3>This course is amazing</h3>
          </div>
          <div className="course-progress"></div>
          <div className="course-list">
          {data.length
            ? data.map((e) => (
                <div key={e.title} className="course-item" onClick={navigateCourses}>
                  <img
                    className="course-img"
                    src={`${e.image}`}
                    alt=""
                    style={{width:'280px;', height:'207px'}}
                  />
                  <p className="course-title">{e.title}</p>
                </div>
              ))
            : "Loading"}
            
          </div>
        </div>
      </div>
    </div>
  )
}
