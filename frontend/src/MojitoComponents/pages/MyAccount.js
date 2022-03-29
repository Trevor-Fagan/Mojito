import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "react-bootstrap";

const MyAccount = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="main_content" style={{textAlign: "center"}}>
      <Card style={{ width: "36rem"}}>
        <Card.Body>
          <Card.Title>Account Information</Card.Title>
          <img
          style={{
            border: "2px solid gray",
            margin: "10px",
            borderRadius: "100%",
          }}
          alt="logo"
          src={user.picture}
        />
          <Card.Text>
            First Name: {user.given_name}
            <br></br>
            Last Name: {user.family_name}
            <br></br>
            Email: {user.email}
          </Card.Text>
        </Card.Body>
      </Card>

      <div>
      </div>
    </div>
  );
};

export default MyAccount;
