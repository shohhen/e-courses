import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import { Courses } from '../Courses/Courses';
import './allcourses.css'

export const AllCourses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products?`
    )
      .then((res) => res.json())
      .then((json) =>setData(json));
  }, []);

  const navigate = useNavigate();

  const navigateCourses = () => {
   navigate('/courses')
  }

  return(
    <main>
    <div className='allcourses-box'>
        <div className="container">
          <div className="allcourses">
            <div className="allcourses-descr">
              <h3><span>All</span> Courses</h3>
            </div>

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
                  <p className="course-title">{e.category}</p>
                </div>
              ))
            : "Loading"}
              </div>
             <Routes>
              <Route path='/courses' element={<Courses />} /> 
           </Routes>
          </div>
        </div>
      </div>
      </main>
  )
}