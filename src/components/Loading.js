import { Placeholder, Row, Col, Card } from "react-bootstrap";

export const Loading = () => {
  return (
    <Row>
      <Col md={4} className="mt-3">
        <Card className="mb-3 border-red">
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
