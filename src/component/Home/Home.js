import React from "react";
import { useEffect, useState } from 'react';
import {  Row } from "react-bootstrap";
import Course from "../Course/Course";

const Home = () => {
    const [courses, setcourses] = useState([]);
    

useEffect(() => {
    fetch('./service.json')
        .then(res => res.json())
        .then(data => setcourses(data));
}, []);

    
    return (

        <div className="mt-5">
           
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
    );
};

export default Home;