import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Allcourse = (props) => {
        const { id, title, author_name, cover_img, price } = props.course;
    const url = `/course/${id}`
    return (
                 
  <Col>
      <Card>
        <Card.Img variant="top" src={cover_img} />
        <Card.Body>
                    <Card.Title>{title}</Card.Title>
                   
                    <p>Author Name: {author_name}</p>
                    <p>Price: ${price}</p>
                    <Link to={url}>visit</Link>
          
          
        </Card.Body>
            </Card>
            </Col>
        
    );
};

export default Allcourse;