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
          dispatch({ type: "edit", data: { id, name: newName, birth, eyes, rating } });
      }
  };

  const handleDelete = () => {
      dispatch({ type: "delete", id });
  };

  const handleRateChange = (newRating) => {
      dispatch({ type: "rate", id, rating: newRating });
  };

  return (
      <Card className="m-2" style={{ width: '18rem' }}>
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                  Birth: {birth} <br />
                  Eyes: {eyes} <br />
                  Rating: {rating}
              </Card.Text>
              <Button variant="primary" onClick={handleDetails} className="m-1">Details</Button>
              <Button variant="warning" onClick={handleEdit} className="m-1">Edit</Button>
              <Button variant="danger" onClick={handleDelete} className="m-1">Delete</Button>
              <RatingBar rate={rating} onRateChange={handleRateChange} />
          </Card.Body>
      </Card>
  );
}


export default PersonInfo;
