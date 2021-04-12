import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name, title }) {
  return (
    <div>
      <Card className="my-2 bg-primary">
        <CardBody>
          <h1 className="text-center my-2 display-3">
            Feedback Management System
          </h1>
        </CardBody>
      </Card>
      <br />
      <br />
      
    </div>
  );
}
export default Header;
