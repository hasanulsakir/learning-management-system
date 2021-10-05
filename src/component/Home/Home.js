import React from "react";
import { useEffect, useState } from 'react';
import {  Row } from "react-bootstrap";
import Bannar from "../Bannar/Bannar";
import Course from "../Course/Course";

const Home = () => {
    const [courses, setcourses] = useState([]);
    

useEffect(() => {
    fetch('./service.json')
        .then(res => res.json())
        .then(data => setcourses(data.slice(0,4)));
}, []);

    
    return (

        <div>
<Bannar></Bannar>
       
        <div className="mt-3 p-5">
           <h1 className="m-2 display-5 fw-bold mb-5">Our Courses</h1>
                <Row xs={1} md={2} className="g-4">
                    
              
            {
                    courses.map(course =>
                    <Course
                    course={course}
                key={course.id}
                > </Course>)
            }
            
            </Row>
            </div>
             </div>
    );
};

export default Home;