import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Contact from '../Contact';

class Navbar extends Component {
  state = {
    selectedLink: ''
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const arr = pathname.split('/');
    const selectedLink = arr[arr.length - 1];
    this.setState({ selectedLink });
  }

  openContact = () => {
    this.props.alertInteraction(true, <Contact />);
  };

  selectLink = link => {
    switch (link) {
      case 'about':
        this.props.handleNav();
        return window.scrollTo(null, this.props.about);
      case 'projects':
        this.props.handleNav();
        return window.scrollTo(null, this.props.project);
      case 'work':
        this.props.handleNav();
        return window.scrollTo(null, this.props.work);
      case 'currentwork':
        this.props.handleNav();
        return window.scrollTo(null, this.props.currentWorkBlock);
    }
  };

  render() {
    const { selectedLink } = this.state;
    const { open, email, phone, company } = this.props;
    return (
      <nav
        id="nav"
        className={`${
          open ? 'nav--open' : ''
        } flex column black align-center justify-center`}
      >
        {/* <img
          className="profile-pic"
          src="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/_1170269%20copy%202.JPG?alt=media&token=def09c83-3d12-42fa-a64f-5b16f3fb2ee8"
        /> */}
        <div className="flex row align-center wrap my-10px justify-center">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://apps.apple.com/us/developer/eamonn-and-ian-llc/id351040467"
          >
            <i className="fab fa-app-store text-decoration-none color-secondary" />
          </a>
          {/* <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/archon21"
          >
            <i className="fab fa-github-square text-decoration-none color-secondary" />
          </a> */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/gilesnugent/"
          >
            <i className="fab fa-linkedin-in text-decoration-none color-secondary" />
          </a>
        </div>
        <a
          className="headline-6  w-90 my-10px py-5px color-white p-5px link"
          onClick={() => this.selectLink('currentwork')}
        >
          COMING SOON
        </a>
        <a
          className="headline-6  w-90 my-10px py-5px color-white p-5px link"
          onClick={() => this.selectLink('work')}
        >
          COMPLETED WORK
        </a>

        <a
          className="headline-6  w-90 my-10px py-5px color-white p-5px link"
          onClick={() => this.selectLink('about')}
        >
          CONTACT US
        </a>
        <div className="flex column align-center">
          <span className="body-1 color-white my-5px px-15px">{phone}</span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="body-1 text-center my-5px color-white px-15px break"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  email: state.init.email,

  phone: state.init.phone,
  company: state.init.company
});

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
