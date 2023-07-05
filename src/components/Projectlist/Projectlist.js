import React, { useEffect, useState } from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/olx-clone image.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'
import { getAll } from '../../api/products';

function Projectlist() {
  const [data,setData] = useState([])
  const getData = async()=>{
    const res = await getAll()
    setData(res)
  }
  useEffect(()=>{
getData()
  },[])
  console.log(data)
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
{data.map((prd)=>( <Col md={4} className="project-card">
              <ProjectCard
                imgPath={prd.image}
                isBlog={false}
                title={prd.name}
                description={prd.desc}
                ghLink={prd.source_code_link}
              />
            </Col>))}

    
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist