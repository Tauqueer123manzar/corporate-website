import Carousel from 'react-bootstrap/Carousel'
import courses1 from '../assets/images/courses1.jpg'
import courses3 from '../assets/images/courses3.jpg'
import courses4 from '../assets/images/courses4.jpg'
import './Hero.css'
var heroData=[
    {
       id:1,
       image:courses1,
       title:'The perfect design for website',
       description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
       link:'https://www.google.com'
    },
    {
        id:2,
        image:courses3,
        title:'Start Your future Financial plan',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link:'https://www.facebook.com'
    },
    {
        id:3,
        image:courses4,
        title:'Enjoy the difference',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
        link:'https://www.twitter.com'
    }
];
const Hero = () => {
    return (
        <section id="Home" className='hero-block'>
            <Carousel>
            {
              heroData.map(hero=>{
                return(
                    <Carousel.Item key={hero.id}>
                    <div className="carousel-image-wrapper"> 
                    <img
                        className="d-block w-100"
                        src={hero.image}
                        alt={"slide "+hero.id}
                        style={{ maxHeight: "75vh" }}
                    />
                    </div> 
                    <div className="overlay"></div>
                    <Carousel.Caption>
                        <h3 className='text-center fw-900 text-danger mt-sm-100 mt-md-200'>{hero.title}</h3>
                        <p  className='text-center fw-medium mt-sm-200 mt-md-300'>{hero.description}</p>
                        <a className='btn btn-danger' href={hero.link}>Learn More  <i class="fa-solid fa-arrow-right"></i></a>
                    </Carousel.Caption>
                </Carousel.Item>
                );
            })
          }
            </Carousel>
        </section>
    )
}

export default Hero
