

import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import logo from '../../logo.svg'
import './index.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};





function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>sdsd dsdsd dsds sdsdsds dsds ds dsdsdsdsd sdsdsdsd sdsdsd sd ddddd</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">


                  <svg width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e000" stroke-width="16px"></circle>
                    <circle r="90" cx="100" cy="100" stroke="#822dc8" stroke-width="15" stroke-linecap="round" stroke-dashoffset="118.692px" fill="transparent" stroke-dasharray="565.48px"></circle>
                    <text x="77px" y="113px" fill="#822dc8" font-size="45px" font-weight="bold">79</text>
                  </svg>


                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <svg width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e000" stroke-width="16px"></circle>
                    <circle r="90" cx="100" cy="100" stroke="#822dc8" stroke-width="15" stroke-linecap="round" stroke-dashoffset="57px" fill="transparent" stroke-dasharray="565.48px"></circle>
                    <text x="77px" y="113px" fill="#822dc8" font-size="45px" font-weight="bold">90</text>
                  </svg>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <svg width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e000" stroke-width="16px"></circle>
                    <circle r="90" cx="100" cy="100" stroke="#822dc8" stroke-width="15" stroke-linecap="round" stroke-dashoffset="567px" fill="transparent" stroke-dasharray="565.48px"></circle>
                    <text x="77px" y="113px" fill="#822dc8" font-size="45px" font-weight="bold">79</text>
                  </svg>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <svg width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e000" stroke-width="16px"></circle>
                    <circle r="90" cx="100" cy="100" stroke="#822dc8" stroke-width="15" stroke-linecap="round" stroke-dashoffset="118.692px" fill="transparent" stroke-dasharray="565.48px"></circle>
                    <text x="77px" y="113px" fill="#822dc8" font-size="45px" font-weight="bold">79</text>
                  </svg>
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <svg width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e0e000" stroke-width="16px"></circle>
                    <circle r="90" cx="100" cy="100" stroke="#822dc8" stroke-width="15" stroke-linecap="round" stroke-dashoffset="118.692px" fill="transparent" stroke-dasharray="565.48px"></circle>
                    <text x="77px" y="113px" fill="#822dc8" font-size="45px" font-weight="bold">79</text>
                  </svg>
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
