import React from 'react';
import { Container, Row, Col, Image,ProgressBar } from 'react-bootstrap'; // Import Container, Row, and Col from react-bootstrap
import About1 from '../assets/images/About1.jpg'
const About = () => {
  return (
    <section id="About" className='About-block'>
      <Container fluid>
        <div className='title-block text-center mt-4 fs-4' style={{ fontWeight: 700, fontSize: 20 }}>
          ABOUT US
        </div>
        <div className='subtitle-block mt-1 text-center'>
          -learn more about us-
        </div>
        <Row className='mt-2 mb-2'>
          <Col md={6}>
            <Image className="w-100 h-75" src={About1} alt='description of image' />
          </Col>
          <Col md={6}>
            <p>This is where your content goes. You can add text, images, or any other elements.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil</p>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil.</p>
            <div>
              <div className='mt-2'>HTML|CSS|Javsacript</div>
              <ProgressBar className='mt-3' variant="danger"  now={60} />

              <div className='mt-3'>Responsive</div>
              <ProgressBar variant="danger" now={20} />

              <div className='mt-3'>Photoshop</div>
              <ProgressBar variant="danger" now={50} />
            </div>
          </Col>
        </Row>
      </Container>
      <hr></hr>
    </section>
  );
};

export default About;
