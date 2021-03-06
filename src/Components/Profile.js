import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class Profile extends React.Component {
  state = {
    user: ""
  }

  componentDidMount() {
    let userId = localStorage.getItem("user_id");
    fetch(`http://localhost:3000/users/${userId}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        user: data
      }))
  }


  render() {
    return (
      <div>
        <Row className="justify-content-md-center" >

          <Col xs="4">
            <h3>
              {this.state.user.name}
            </h3>
            <img src={this.state.user.img_url} ></img>
            <h3>EmaAil:</h3> <h5>{this.state.user.email}</h5>
            <h2> Phone Number:</h2>{this.state.user.phone_number}
            <h2>Age: </h2>{this.state.user.age}
            <h2>Bio:</h2> {this.state.user.bio}


          </Col>
        </Row>
      </div>


    )
  }
}

export default Profile;
