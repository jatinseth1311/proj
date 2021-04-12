import React, { Component } from 'react';
import { Card, CardBody } from "reactstrap";

function About({ name, title }) {
  return (
    <div>
      <Card >
        <CardBody>
          <h3>
            This page is developed and managed by group-5
          </h3>
        </CardBody>
      </Card>
      <br />
      <br />
      
    </div>
  );
}
export default About;