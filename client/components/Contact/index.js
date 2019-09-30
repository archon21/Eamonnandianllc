import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertInteraction, sendMessage } from '../../store';

class ContactForm extends Component {
  state = {
    email: '',
    name: '',
    message: '',
    subject: '',
    phone: '',
    all: false,
    error: {},
    sent: false
  };
  dataHook = data => {
    this.setState({ [data.name]: data.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let all = true;
    const error = {};
    Object.entries(this.state).forEach(field => {
      if (field[1] === '') {
        all = false;
        error[field[0]] = true;
      }
    });
    if (all) {
      this.props.sendMessage(this.state);
      return this.setState({ feedback: 'Your message has been sent' });
    } else {
      return this.setState({
        feedback: 'Fill out all fields before submiting'
      });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { feedback, name, email, phone, subject, message } = this.state;
    return (
      <form className="contact flex column align-center" onSubmit={this.handleSubmit}>
        <h4 className="headline-4 color-primary my-20px">
        Contact Us
        </h4>
        <div className="flex row align-center wrap">
          <input
            onChange={this.handleChange}
            className="textfield"
            placeholder="Name"
            name="name"
            value={name}
          />
          <input
            onChange={this.handleChange}
            className="textfield"
            placeholder="Email"
            name="email"
            value={email}
          />
          <input
            onChange={this.handleChange}
            className="textfield"
            placeholder="Phone"
            name="phone"
            value={phone}
          />
          <input
            onChange={this.handleChange}
            className="textfield"
            placeholder="Subject"
            name="subject"
            value={subject}
          />
          <textarea
            onChange={this.handleChange}
            className="textarea"
            placeholder="How can we help?"
            name="message"
            value={message}
            multiline
          />
        </div>
        <span className="color-primary headline-5">{feedback}</span>
        <button className="button" type="submit">
          Send
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: () => dispatch(alertInteraction(false)),
  sendMessage: message => dispatch(sendMessage(message))
});

export default connect(
  null,
  mapDispatchToProps
)(ContactForm);
