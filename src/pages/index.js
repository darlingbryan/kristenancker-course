import React from "react"
import {
  Row,
  Col,
  Container,
  ListGroup,
  Jumbotron,
  ResponsiveEmbed,
  Button,
} from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import kristen from "../images/headshot.png"
import blog from "../images/blog.jpg"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <Jumbotron className="homebanner home-section">
      <div className="m-auto text-center homebanner-text">
        <h1>Kristen Ancker MS Ed. AMS</h1>
        <h2>Early Childhood and School Consultant</h2>
      </div>
    </Jumbotron>
    <div className="home-section">
      <Row>
        <Col className="text-center">
          <h1>Hi there!</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/CdTt4sYyQx8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ResponsiveEmbed>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col lg={{ span: 4, offset: 3 }}>
          <Button variant="warning">Book a Free Session</Button>
        </Col>
        <Col lg={{ span: 3 }}>
          <Button variant="warning">Book a Free Session</Button>
        </Col>
      </Row>
    </div>
    <div className="about-section home-section py-5">
      <Row>
        <Col lg={{ span: 10, offset: 1 }} className="text-center">
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 5, offset: 1 }} className="p-5">
          <img src={kristen} alt="kristen" width="100%" />
        </Col>
        <Col lg={5} className="p-5">
          <p>
            Kristen is a Montessori trained, Connecticut and Massachusetts
            certified teacher for grades Pre-K – 6. Kristen was the Director of
            the Children’s House program for 6 years at Summit Montessori School
            in Framingham, Massachusetts. She was the founding teacher for
            Summit’s pre-school/kindergarten class and grew the program from one
            classroom of 20 students to three classrooms of over 60 students in
            the course of 4 years. As the Accreditation Coordinator, Kristen
            helped to create and document the curriculum for AISNE (Association
            of Independent Schools of New England) and AMS (American Montessori
            Society) accreditation. Kristen trained and mentored teachers,
            purchased materials and designed classrooms.
          </p>
          <p>
            She then became the Assistant Head of School at Oak Meadow School
            (an independent Montessori school ages 3-14 with 260 students) in
            Littleton, Massachusetts. There she developed a school wide
            curriculum review, a Supervision and Evaluation process, and a
            Health and Life Skills Curriculum and led the school through a
            successful AMS/AISNE accreditation. Currently Kristen is consulting
            privately with schools and families to provide education on child
            development, Positive Discipline, Montessori, and creating healthy
            school and family relationships through non-violent communication.
          </p>
          <p>
            She is working with schools in the Connecticut, New York and
            Massachusetts area and travels as needed. Kristen has her AMS
            Montessori credential through Northeast Montessori Institute, her
            Masters of Science of Elementary Education from the University of
            New Haven and her Bachelor’s Degree in Child and Family Studies from
            the University of New Hampshire. She currently lives in Weston,
            Connecticut with her husband and three young children.
          </p>
        </Col>
      </Row>
    </div>
    <div className="home-section">
      <Row>
        <Col className="text-center">
          <h1>Testimonials</h1>
        </Col>
      </Row>

      <Row className="px-5">
        <Col lg={{ span: 8, offset: 2 }}>
          <Row className="testimonial">
            <Col lg={3} className="mr-5">
              <img src={kristen} alt="client" width="200px" />
            </Col>
            <Col>
              <p>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                voluptates eum voluptas voluptatem provident iste deserunt at
                adipisci reprehenderit inventore beatae asperiores nesciunt
                consectetur ex reiciendis maxime, nulla aut excepturi est in
                ipsa saepe quidem. Nisi delectus, est saepe consequuntur et iste
                iusto aut laboriosam assumenda deserunt. Deleniti, odit libero."
              </p>
              <h4>- Happy Parent</h4>
            </Col>
          </Row>
          <Row className="testimonial">
            <Col lg={3} className="mr-5">
              <img src={kristen} alt="client" width="200px" />
            </Col>
            <Col>
              <p>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                voluptates eum voluptas voluptatem provident iste deserunt at
                adipisci reprehenderit inventore beatae asperiores nesciunt
                consectetur ex reiciendis maxime, nulla aut excepturi est in
                ipsa saepe quidem. Nisi delectus, est saepe consequuntur et iste
                iusto aut laboriosam assumenda deserunt. Deleniti, odit libero."
              </p>
              <h4>- Happy Parent</h4>
            </Col>
          </Row>
          <Row className="testimonial">
            <Col lg={3} className="mr-5">
              <img src={kristen} alt="client" width="200px" />
            </Col>
            <Col>
              <p>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                voluptates eum voluptas voluptatem provident iste deserunt at
                adipisci reprehenderit inventore beatae asperiores nesciunt
                consectetur ex reiciendis maxime, nulla aut excepturi est in
                ipsa saepe quidem. Nisi delectus, est saepe consequuntur et iste
                iusto aut laboriosam assumenda deserunt. Deleniti, odit libero."
              </p>
              <h4>- Happy Parent</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <div className="blog-section">
      <Row className="mb-5">
        <Col lg={{ span: 8, offset: 2 }} className="blog-header">
          <div className="blog-header-text-container">
            <h1>How To Get Our Kids To Listen</h1>
            <p>October 10, 2019</p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={{ span: 8, offset: 2 }} className="blog-header">
          <div className="blog-header-text-container">
            <h1>How To Get Our Kids To Listen</h1>
            <p>October 10, 2019</p>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={{ span: 8, offset: 2 }} className="blog-header">
          <div className="blog-header-text-container">
            <h1>How To Get Our Kids To Listen</h1>
            <p>October 10, 2019</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 4 }} className="text-center">
          <Button className="m-auto" variant="warning">
            Load more post..
          </Button>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default IndexPage
