import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "react-bootstrap";

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state={apiResponse: "", secondResponse: ""}
  }

  callAPI () {
    fetch("http://localhost:8000/backend/budget")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: JSON.parse(res)}))
    
    fetch("http://localhost:8000/backend/user")
      .then(res => res.text())
      .then(res => this.setState({secondResponse: JSON.parse(res)}))
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
              First Name: {this.state.secondResponse.FirstName}
              <br></br>
              Last Name: {this.state.secondResponse.LastName}
              <br></br>
              Email: {this.state.secondResponse.Email}
              <br></br>
              Id: {this.state.apiResponse.Id}
            </Card.Text>
          </Card.Body>
        </Card>
  
        <div></div>
      </div>
    );
  }
};

export default MyAccount;
