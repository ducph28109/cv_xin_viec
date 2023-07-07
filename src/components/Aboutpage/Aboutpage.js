import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>Hiện tại, tôi đang là sinh viên kì 6 tại trường FPT Polytechnic.
Tôi bắt đầu học lập trình từ tháng 10 năm 2021.
Ngoài thời gian học trên trường thì về nhà mình cũng học thêm từ trên mạng xã hội như: Youtube, F8...
Tôi sẽ cố gắng hơn nữa để trở thành Frontend Developer.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML/CSS</li>
                                    <li>JavaScript</li>
                                    
                                    <li>Bootsrap </li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Node Js</li>
                                    
                                
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage