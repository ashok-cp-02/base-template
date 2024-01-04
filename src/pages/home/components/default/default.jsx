// *******~ Import ~******** //
//? React
import React from "react";
//? Assets
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//? Components

//? CSS
import "./css/default.scss";
//? Images

//? JSON File

//? Icons
// *******~ Import ~******** //

const Default = () => {
  return (
    <section className="default">
      <Container>
        <Row>
          <Col xxl={12}>
            <h1>My Base Template</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Default;
