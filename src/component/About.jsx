import React from 'react';
import { Container, Row, Col ,Image} from 'react-bootstrap'; // Import Container, Row, and Col from react-bootstrap
import About1 from '../assets/images/About1.jpg'
const About = () => {
  return (
    <section id="About" className='About-block'>
      <Container fluid>
        <div className='title-block'>
          About Us
          <div className='subtitle-block'>
            -learn more about us-
          </div>
        </div>
        <Row>
          <Col sm={6}>
            {/* Place your image component here */}
            <Image className="w-200px h-150px" src={About1}/>
          </Col>
          <Col sm={6}>
            <p>This is where your content goes. You can add text, images, or any other elements.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
