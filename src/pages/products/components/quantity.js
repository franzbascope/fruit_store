import { Card, Button } from "react-bootstrap";
export default ({ quantity, add, decrease }) => {
  return (
    <Card className="mt-1 mb-2">
      <Card.Body>
        <Button
          onClick={() => {
            decrease();
          }}
          variant="outline-danger col-md-4"
          size="sm"
        >
          -
        </Button>
        <strong className="col-md-4">{quantity}</strong>
        <Button
          onClick={() => {
            add();
          }}
          variant="outline-primary col-md-4"
          size="sm"
        >
          +
        </Button>
      </Card.Body>
    </Card>
  );
};
