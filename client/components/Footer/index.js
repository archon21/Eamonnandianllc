import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Footer = props => {
  const { phone, company } = props;
  return (
    <footer id="footer">
      <div className="flex column wrap align-center justify-center">
        <div className="flex row wrap align-center justify-center">
          {/* <Link to="/privacy" className="body-1 link color-secondary py-5px">
            Privacy
          </Link> */}
        </div>
        <p className="body-1 text-center color-white">
          © 2019 Copyright {company}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const mapStateToProps = state => ({
  phone: state.init.phone,
  company: state.init.company
});

export default connect(mapStateToProps)(Footer);
