import React from 'react'
import { Container, Row,Col} from 'react-bootstrap';
import image1 from '../assets/images/work image-1.jpg';
import image2 from '../assets/images/work image-2.jpg';
import image3 from '../assets/images/work image-3.jpg';
import image4 from '../assets/images/work image-4.jpg';
import image5 from '../assets/images/work image-5.jpg';
import image6 from '../assets/images/work image-6.jpg';
import image7 from '../assets/images/work image-7.jpg';
import image8 from '../assets/images/work image-8.jpg';
import image9 from '../assets/images/work image-9.jpg';
import Pagination from 'react-bootstrap/Pagination';
import './Works.css'
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
        image:image3,
        title:"The difference",
        subtitle:"web design"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image4,
        title:"Nature patterns",
        subtitle:"Branding"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image5,
        title:"The difference",
        subtitle:"photography"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image6,
        title:"Winter sonata",
        subtitle:"web design"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image7,
        title:"Lonely path",
        subtitle:"Branding"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image8,
        title:"Appreciation",
        subtitle:"photography"
    },
    {
        id:1,
        link:"https://www.google.com",
        image:image9,
        title:"Happy days",
        subtitle:"web design"
    }
];
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Works = () => {
  return (
    <section id="works" className='block works-block'>
        <Container fluid>
            <div className='title-block text-center mt-6' style={{ fontSize: 20, fontWeight: 700 }}>OUR WORKS</div>
            <div className='subtitle-block text-center mt-1'>- our awesome works -</div>
            <Row className="mt-4 portfoliolist">
              {
                workdata.map(Works=>{
                  return(
                    <Col sm={4} key={Works.id}>
                    <div className='portfoliolist'>
                       <a href={Works.link}>
                       <img className='w-100 h-50' src={Works.image} alt={Works.title} />
                       <div className='label text-center'>
                      <h3>{Works.title}</h3>
                      <p>{Works.subtitle}</p>
                      </div>
                      </a>
                    </div>
                    </Col>
                  )
                })
              }
            </Row>
            <Pagination>{items}</Pagination>
        </Container>
        <hr></hr>
    </section>
  )
}

export default Works
