import React from 'react';
import { useParams } from 'react-router';

const CourseDetail = () => {
    const {courseId} = useParams();
    console.log(courseId);
    return (
        <div className="mt-5">
            <h2>This Is Course Details Page For ID: {courseId}</h2>
          <img src="../logo.png" alt="logo" className='logo' rounded /> 
            <div className="mt-5">
                <h2 className="text-primary display-4 font-bold">Under Construction</h2>
                <p>This page is comming soon</p>
            </div>
        </div>
    );
};

export default CourseDetail;