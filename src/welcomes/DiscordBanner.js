import {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../assets/img/profile.svg'

export const DiscordBanner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random()*100);
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let fullText = "software_developer";
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    }

    return (
        <section className="banner" id="disc-home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        {/* <span className='tagline'>
                            Portfolio
                        </span> */}
                        <h1>
                            Hello Discord!! I'm Annie  
                            {/* {`Hi~ I'm Annie ◡̈`} */}
                        </h1>
                        <h3>A <span className="wrap">{text}</span></h3>
                        <h3>who thrives to contribute to a social media platform</h3>
                        {/* <p>
                            "" - 
                        </p> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profile} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 