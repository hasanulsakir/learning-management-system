import React from 'react';
import { useEffect, useState } from 'react';
import {  Row } from "react-bootstrap";
import Allcourse from '../Allcourse/Allcourse';
const Service = () => {

    const [courses, setcourses] = useState([]);
    

useEffect(() => {
    fetch('./course.json')
        .then(res => res.json())
        .then(data => setcourses(data));
}, []);
    return (
       <div className="mt-5">
              <h1 className="m-2 display-5 fw-bold mb-5">All Courses</h1>
            <Row xs={1} md={3} className="g-4 p-5">
              
            {
                    courses.map(course =>
                    <Allcourse
                    course={course}
                key={course.id}
                > </Allcourse>)
            }
            
            </Row>
        </div>
    );
};

export default Service;