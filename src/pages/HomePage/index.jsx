import React from "react";
import { Row, Col } from "react-bootstrap";
import Page from "../../components/layouts/Page";
import Content from "../../components/layouts/Content";
import { Link } from "react-router-dom";
import BlogIndex from "../../components/BlogIndex";

function HomePage() {
  return (
    <Page wide={true} pageTitle="React Fetch">
      <Row className="">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light clearfix">
            <h3 className="text-bibo-color">React Starter</h3>
            <h5>
              React Bootstrap 5 w/ SCSS, Bootsrapt Icons, React Router 5,
              Formik, Context & Reducer, Lodash, Yup, Datepicker and Node-Sass
            </h5>
            <Link to="/add-post" className="btn btn-info float-right">
              Add New Post
            </Link>
          </Content>
        </Col>
      </Row>
      <Row className="">
        <Col sm={12}>
          <Content width="w-100" cssClassNames="bg-light clearfix">
            <BlogIndex />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default HomePage;
