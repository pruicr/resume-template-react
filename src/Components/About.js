import React, { Component } from 'react'

class About extends Component {
  render() {
    if(this.props.data) {
      var name = this.props.data.name
      var image = "images/" + this.props.data.image
      var bio = this.props.data.bio
      var street = this.props.data.address.street
      var city = this.props.data.address.city
      var state = this.props.data.address.state
      var zipcode = this.props.data.address.zipcode
      var phone = this.props.data.phone
      var email = this.props.data.email
      var resumedownload = this.props.data.resumedownload
    }
    return (
      <div>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic"  src={image} alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
     						    <span>{name}</span><br/>
     						    <span>{street}<br/> {city}, {state} {zipcode} US</span><br/>
     						    <span>{phone}</span><br/>
                    <span>{email}</span>
     					    </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumedownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default About
