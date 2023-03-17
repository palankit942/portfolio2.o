import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import shoebox from '../../Assets/shoe.png'
import Macts from '../../Assets/mac.png'
import usm from '../../Assets/usm.png'
import a from '../../Assets/a.png'
import sorting from '../../Assets/sorting.png'
import note from '../../Assets/note.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={shoebox}
                isBlog={false}
                title="The shoebox"
                description="Features: Debounce for search, Product List-
                ing, Single Product, Authentication, Cart and
                
                Wishlist Management, Address Management
                and Payment Integration with Razorpay."
                ghLink="https://theshoeboxx.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Macts}
                isBlog={false}
                title="Macts-Quiz"
                description="Features: Quiz Category, Play Quiz with spe-
                cific category, get Result of quiz with final
                Score"
                ghLink="https://macts.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={usm}
                isBlog={false}
                title="User Management System"
                description="In this project we can manage react form data with local
                storage curd operation, Image uplode ."
                ghLink="https://umsystem.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={a}
                isBlog={false}
                title="To-Do-List"
                description="This inspired by React style because we only have a
                root element in the HTML and everything else is injected by Javascript and DOM manipulation over the
                entire project.."
                ghLink="https://palankit-to-do.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sorting}
                isBlog={false}
                title="Sorting Visualizer"
                description="A web-based animation website which is created to
                visualize four common sorting algorithms: Selection
                Sort, Bubble Sort, Insertion Sort, Merge Sort , Quick
                Sort and Heap Sort."
                ghLink="https://palankit942.github.io/sorting_visualizer/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={note}
                isBlog={false}
                title="Notery"
                description=" Note App that build will allow a user to add a note to a list of  items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://noteryy.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist