import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "react-bootstrap";

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state={apiResponse: ""}
  }

  callAPI () {
    fetch("http://localhost:8000/trevor/rock")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
  }

  componentWillMount () {
    this.callAPI();
  }

  render() {
    //const { user, isAuthenticated } = useAuth0();

    return (
      <div className="main_content">
        <Card style={{ width: "93rem", height: "55rem" }}>
          <Card.Body>
            <Card.Title className="display-1">Account Information</Card.Title>
            {/* <img
              style={{
                border: "2px solid gray",
                margin: "10px",
                borderRadius: "100%",
              }}
              alt="logo"
              src={user.picture}
            /> */}
            <Card.Text className="display-6">
              First Name: {/*user.given_name*/}
              <br></br>
              Last Name: {/*user.family_name*/}
              <br></br>
              Email: {/*user.email*/}
              <br></br>
              Here: {this.state.apiResponse}
            </Card.Text>
          </Card.Body>
        </Card>
  
        <div></div>
      </div>
    );
  }
};

export default MyAccount;
