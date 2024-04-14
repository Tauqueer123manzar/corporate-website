import React from 'react'
import { Container, Row,Col} from 'react-bootstrap';
import image1 from '../../src/assets/images/work image-1.jpg';
import image2 from '../../src/assets/images/work image-2.jpg';
import image3 from '../../src/assets/images/work image-3.jpg';
import image4 from '../../src/assets/images/work image-4.jpg';
import image5 from '../../src/assets/images/work image-5.jpg';
import image6 from '../../src/assets/images/work image-6.jpg';
import image7 from '../../src/assets/images/work image-7.jpg';
import image8 from '../../src/assets/images/work image-8.jpg';
import image9 from '../../src/assets/images/work image-9.jpg';
var workdata=[
    {
        id:1,
        link:"https://www.google.com",
        image:image1,
        title:"Lonely path",
        subtitle:"web design"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image2,
        title:"Photographer girl",
        subtitle:"Branding"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image1,
        title:"The difference",
        subtitle:"web design"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image1,
        title:"Nature patterns",
        subtitle:"Branding"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image1,
        title:"The difference",
        subtitle:"photography"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image1,
        title:"Winter sonata",
        subtitle:"web design"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image1,
        title:"Lonely path",
        subtitle:"Branding"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image1,
        title:"Appreciation",
        subtitle:"photography"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image1,
        title:"Happy days",
        subtitle:"web design"
    }
];
const Works = () => {
  return (
    <section id="works" className='work-block'>
        <Container fluid>
            <div className='title-block text-center mt-4' style={{ fontSize: 20, fontWeight: 700 }}>OUR WORKS</div>
            <div className='subtitle-block text-center mt-1'>- our awesome works -</div>
            <Row className="mt-2 Portfoliolist">
              {
                workdata.map(Works=>{
                  return(
                    <Col sm={4} key={Works.id}>
                    <div className='portfolio-wrapper'>
                       <a href={Works.link}/>
                      <h3>{Works.title}</h3>
                      <p>{Works.subtitle}</p>
                    </div>
                    </Col>
                  )
                })
              }
            </Row>
        </Container>
    </section>
  )
}

export default Works
