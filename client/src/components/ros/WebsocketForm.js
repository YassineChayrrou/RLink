import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Col,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Connection from "./Connection";

const WebsocketForm = () => {
  const [websocket, setWebsocket] = useState({ link: "", port: "" });
  const [wslink, setWslink] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const visuallyHiddenAtConnection = {
    display: !isConnected ? "block" : "none",
  };
  const visuallyHiddenAtDisconnection = {
    display: isConnected ? "block" : "none",
  };

  useEffect(() => {}, []);

  const listRosTopics = async () => {};

  return (
    <Container>
      <Form
        className="d-flex justify-content-center"
        onSubmit={(e) => {
          e.preventDefault();
          setWslink(`ws://${websocket.link}:${websocket.port}`);
          setIsConnected(true);
        }}
      >
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={5} className="d-flex justify-content-center">
            <InputGroup.Text style={visuallyHiddenAtConnection}>
              ws://
            </InputGroup.Text>
            <Form.Label
              htmlFor="inlineFormInputName"
              style={visuallyHiddenAtConnection}
            ></Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder="websocket"
              onChange={(e) => {
                setWebsocket({ ...websocket, link: e.target.value });
              }}
              style={visuallyHiddenAtConnection}
            />
          </Col>
          <Col sm={3} className="d-flex justify-content-center">
            <Form.Label htmlFor="inlineFormInputGroupUsername"></Form.Label>
            <InputGroup>
              <InputGroup.Text style={visuallyHiddenAtConnection}>
                :
              </InputGroup.Text>
              <FormControl
                id="inlineFormInputGroupUsername"
                placeholder="port"
                onChange={(e) => {
                  setWebsocket({ ...websocket, port: e.target.value });
                }}
                style={visuallyHiddenAtConnection}
              />
            </InputGroup>
          </Col>

          <Col xs="auto" className="d-flex justify-content-center">
            <Button type="submit" style={visuallyHiddenAtConnection}>
              Connect
            </Button>
          </Col>

          <Col xs="auto" className="d-flex justify-content-center">
            <Button
              className="btn btn-danger"
              style={visuallyHiddenAtDisconnection}
              onClick={(e) => {
                setIsConnected(false);
              }}
            >
              Disconnect
            </Button>{" "}
          </Col>
        </Row>
      </Form>
      <Connection wslink={wslink} isConnected={isConnected} />
    </Container>
  );
};

export default WebsocketForm;
