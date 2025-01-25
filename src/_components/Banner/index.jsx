import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../logo.svg';
import './index.css';


function Banner() {
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];

  const [text, setText] = useState('');

  const [delta, setDelta] = useState(300 - Math.random() + 100);

  const period = 500;


  const tick = () => {
    let i = loopIndex % toRotate.length;
    let fullText = toRotate[i];
    let newText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(newText);

    if (isDeleting) {
      setDelta(period / 2);
      if (newText === '') {
        setDelta(period);
        setIsDeleting(false);
        setLoopIndex(prev => prev + 1);
      }
    }
    if (newText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    }
  }



  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  });




  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className="first-col">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm `}<span className="warp">{text}</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button onClick={() => console.log('connect')} >Let's Talk <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default Banner;
