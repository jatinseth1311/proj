import React from "react";
import { Card, CardBody, Jumbotron } from "reactstrap";

function Header({ name, title }){
    return(
        <div>
            <Card className="my-2 bg-primary">
                <CardBody>
            
            <h1 align='center' >Feedback Managment System</h1>
            
            </CardBody>
            </Card>
        </div>
    );
}
export default Header;  