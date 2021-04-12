import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
const Menus=()=>{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/">
               <h4>Home</h4>
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-feedback">
              <h4>Add Feedback</h4>  
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-feedback">
                <h4>View Feedback</h4>
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact">
                <h4>Contact</h4>
            </Link>
        </ListGroup>

    );
}

export default Menus;