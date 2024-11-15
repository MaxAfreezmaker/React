import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import RatingBar from './RatingBar';

function PersonInfo({ id, name, birth, eyes, rating, dispatch }) {
  const handleDetails = () => {
    alert(`Details person with ID: ${id}`);
  };

  const handleEdit = () => {
    const newName = prompt("Enter new name:", name);
    if (newName && newName !== name) {
      console.log("Dispatching edit action"); // Debugowanie
      dispatch({ type: "edit", id: id, newName: newName });
    }
  };

  const handleDelete = () => {
    console.log("Dispatching delete action"); // Debugowanie
    dispatch({ type: "delete", id: id });
  };

  const handleRateChange = (newRating) => {
    console.log("Dispatching rate action", newRating); // Debugowanie
    dispatch({ type: "rate", id: id, rating: newRating });
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Id: {id}</ListGroup.Item>
          <ListGroup.Item>Data urodzin: {birth}</ListGroup.Item>
          <ListGroup.Item>Kolor oczu: {eyes}</ListGroup.Item>
          <ListGroup.Item>
            <RatingBar rate={rating} onRateChange={handleRateChange} />
          </ListGroup.Item>
        </ListGroup>
        <div className="d-flex justify-content-between mt-3">
          <Button variant="primary" onClick={handleDetails}>Details</Button>
          <Button variant="primary" onClick={handleEdit}>Edit</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PersonInfo;