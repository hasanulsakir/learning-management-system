import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const CourseDetail = () => {
    const {courseId} = useParams();
    const history = useHistory();
    const goback = () => {
        history.push('/');
    }
    return (
        <div className="mt-5">
            <h2>This Is Course Details Page For ID: {courseId}</h2>
          <img src="../logo.png" alt="logo" className='logo' rounded /> 
            <div className="mt-5">
                <h2 className="text-primary display-4 font-bold">Under Construction</h2>
                <p>This page is comming soon</p>
                <Button onClick={goback} variant="success">Back</Button>
            </div>
        </div>
    );
};

export default CourseDetail;