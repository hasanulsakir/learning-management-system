import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Allcourse = (props) => {
        const { id, title, author_name, cover_img, price } = props.course;
  // const url = `/course/${id}`;
  const history = useHistory();
  const detailsCourse = () => {
    
    history.push(`/course/${id}`);
  }
    return (
                 
  <Col>
      <Card>
        <Card.Img variant="top" src={cover_img} />
        <Card.Body>
                    <Card.Title>{title}</Card.Title>
                   
                    <p>Author Name: {author_name}</p>
                    <p>Price: ${price}</p>
                      <Button onClick={detailsCourse}>Details</Button>
          
          
        </Card.Body>
            </Card>
            </Col>
        
    );
};

export default Allcourse;