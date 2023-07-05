import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Bùi Đình Đức</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/ducph28109");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
        
            <button onClick={() => {
              window.open("https://twitter.com/rahulvijay8156");
            }}
              className='socailmediabtn'><FaFacebookSquare className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.facebook.com/profile.php?id=100052904505332&mibextid=ZbWKwL");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home