import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import AddFormer from './AddFormer';

class Addnewmem extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Add </CardTitle>
            <CardSubtitle>Adding the  newly creating</CardSubtitle>
            <Link to="/addFormer"> Click here
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Add Consumers</CardTitle>
            <CardSubtitle>Card Subtitle</CardSubtitle>
            <Link to="/addConsumer">
              Click here to add consumers
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Addnewmem;