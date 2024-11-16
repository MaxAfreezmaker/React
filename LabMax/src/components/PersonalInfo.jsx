import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import RatingBar from './RatingBar';
import AppReducer from '../data/AppReducer';
import { redirect } from 'react-router-dom';

function PersonInfo({ id, name, birth, eyes, rating, dispatch }) {
  const handleDetails = () => {
    alert(`Details person with ID: ${id}`);
  };

  const handleEdit = () => {
    const newName = prompt("Enter new name:", name);
    if (newName && newName !== name) {
      console.log("Dispatching edit action");
      dispatch({ type: "edit", id: id, newName: newName });
    }
  };

  const handleDelete = () => {
    console.log("Dispatching delete action");
    dispatch({ type: "delete", id: id });
  };

  const handleRateChange = (newRating) => {
    console.log("Dispatching rate action", newRating);
    dispatch({ type: "rate", id: id, rating: newRating });
  };

  function ProfileInfo({ name, id, rating }) {
    const context = useContext(AppContext);
    const dispatch = context.dispatch;

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
}

export default PersonInfo;
