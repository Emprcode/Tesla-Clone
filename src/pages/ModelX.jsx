import { Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

export const ModelX = () => {
return (
    <div className='pageX' id='modelX' >
      <Container className='p-3'>
        <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
        
      <Row className='text-center p-5' >
        <div className='p-5 mt-5'>
            <h1>Model X</h1>
            <p>Explore Inventory</p>
            <p>After Federal Tax Credit</p>
        </div>

       
       </Row>

       <div className='button-div gap-3'>
       <div className='button mt-5 bg-light text-dark'>CUSTOM ORDER</div>
       <div className='button mt-5 bg-secondary text-light'>DEMO DRIVE</div>
     </div>

     </div>
     </Container>
    </div>
  );
}
