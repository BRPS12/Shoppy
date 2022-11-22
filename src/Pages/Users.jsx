import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Users = ({ user }) => {
  return (
    <div>
      <Link
        href="#"
        style={{ color: "white" }}
        className="text-decoration-none"
        to={`/${user.id}`}
      >
        <Container>
          <Card
            style={{
              width: "18rem",
              backgroundColor: "black",
              borderColor: "white",
            }}
          >
            <Card.Img
              variant="top"
              src={user.images[0]}
              style={{ height: 200 }}
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{}}></Card.Title>
              <Card.Title>
                {" "}
                <p>Title : {user.title}</p>
              </Card.Title>
              <Card.Title>
                {" "}
                <p>id : {user.id}</p>
              </Card.Title>
              <Card.Title>
                <p>Price : {user.price}</p>
              </Card.Title>
              <Card.Title>
                {" "}
                <p>Rating : {user.rating}</p>
              </Card.Title>
              <Card.Title>
                <p>Stock : {user.stock}</p>
              </Card.Title>
              <Card.Title>
                {" "}
                <p>Brand : {user.brand}</p>
              </Card.Title>
              <Card.Title>
                {" "}
                <p>Category : {user.category}</p>
              </Card.Title>
            </Card.Body>
          </Card>
        </Container>
      </Link>
    </div>
  );
};

export default Users;
