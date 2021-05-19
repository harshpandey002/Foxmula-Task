import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TaskTwo.css";
import Accordion from "react-bootstrap/Accordion";
import { Card } from "react-bootstrap";

function TaskTwo({ setTask }) {
  return (
    <div>
      <button onClick={() => setTask(true)} id="two">
        Task 1
      </button>
      <Accordion defaultActiveKey="6">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1" className="week">
            Week 1
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul class="list-items">
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2" className="week">
            Week 2
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul class="list-items">
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3" className="week">
            Week 3
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul class="list-items">
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4" className="week">
            Week 4
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul class="list-items">
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5" className="week">
            Week 5
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <ul class="list-items">
                <li>List item</li>
                <li>List item</li>

                <li>List item</li>
                <li>List item</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6" className="week">
            Week 6
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <ul class="list-items">
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default TaskTwo;
