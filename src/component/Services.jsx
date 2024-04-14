import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaClone } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { FaRegLifeRing } from "react-icons/fa6";
import './Service.css'
const Services = () => {
    var serviceData = [
        {
            id: 1,
            icon: <FaClone />,
            title: "Resonsive design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil."
        },
        {
            id: 2,
            icon: <FaRegSnowflake />,
            title: "Creative Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil."

        },
        {
            id: 3,
            icon: <FaPlug />,
            title: "SEO Optimized",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil."
        },
        {
            id: 4,
            icon: <FaDesktop />,
            title: "Retina Ready",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil."

        },
        {
            id: 5,
            icon: <FaTrophy />,
            title: "Browser Compatibility",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil."
        },
        {
            id: 6,
            icon: <FaRegLifeRing />,
            title: "Customer Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil."
        }

    ];
    return (
        <section id="Service" className='service-block'>
            <Container fluid>
                <div className='title-block text-center mt-4' style={{ fontSize: 20, fontWeight: 700 }}>OUR SERVICES</div>
                <div className='subtitle-block text-center mt-1'>- services we provide -</div>
                <Row className='mt-2'>
                    {
                        serviceData.map(Services => {
                            return (
                                <Col sm={4}>
                                    <div className='service-item' key={Services.id}>
                                        <div className='icon' style={{ fontSize: 30, fontWeight: 700, color: "red" }}>
                                            {Services.icon}
                                        </div>
                                        <h3>{Services.title}</h3>
                                        <p>{Services.description}</p>
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

export default Services
