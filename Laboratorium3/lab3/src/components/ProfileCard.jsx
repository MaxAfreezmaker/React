import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import RatingBar from "./RatingBar";

function ProfileCard({ name, id, rating }) {
 const [rate, setRate] = useState(rating);
  return (
    <Card key={id} style={{ width: "18rem" }} className="m-1 border">
      <Card.Body>
        <Card.Title>Profile</Card.Title>
        <div>
          <RatingBar rate={rate} />
        </div>
        <Card.Text>{name}</Card.Text>
        <Button variant="primary" className="ms-1"
         
        >
          Edit
        </Button>
        <Button 
            variant="danger"
           
            className="ms-1">
          Delete
        </Button>
        <Button
          variant="success"
          className="ms-1"
          //onClick={(e) => setRate((rate + 1) % 11)}
          onClick={(e)=> dispatch({
            type:"rate",
            id:id,
            rate:(rate+1)% 11
          })}
        >
          Rate
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;