import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar } from '../components';
import {
  Block,
  WindoW,
  GalleryBlock,
  Flex,
  Divider,
  Animator
} from '../sub-components/containers';
import { Video, Fab, List, Table, Carousel, Iterable } from '../sub-components';
import Contact from './Contact';

class Home extends Component {
  state = {
    scrolled: 0,

    open: false
  };
  about = React.createRef();
  work = React.createRef();
  aboutBlock = React.createRef();
  workBlock = React.createRef();
  currentWorkBlock = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    this.setState({ scrolled: window.pageYOffset });
  };

  handleNav = () => {
    const { open } = this.state;
    const newOpen = !open;
    this.setState({ open: newOpen });
  };

  render() {
    const {
      state,
      props,
      aboutBlock,
      workBlock,
      about,
      work,

      currentWorkBlock
    } = this;
    const { works, currentWorks, phone, email, company } = props;
    const { scrolled, open } = state;

    return (
      <div style={{ overflowX: 'hidden' }} className="flex column align-end">
        <Navbar
          handleNav={this.handleNav}
          about={this.about.current && this.about.current.offsetTop}
          work={this.work.current && this.work.current.offsetTop}
          open={open}
          currentWorkBlock={
            this.currentWorkBlock.current &&
            this.currentWorkBlock.current.offsetTop
          }
        />
        <button
          onClick={this.handleNav}
          className={`${open ? 'open-nav--open open-nav' : 'open-nav'}`}
        >
          <i className="material-icons">keyboard_arrow_down</i>
        </button>

        <WindoW column video background="background-lightblack">
          <h1 className="headline-1 color-white light">{company}</h1>
        </WindoW>
        <WindoW
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/gilesnugent-ee4d9.appspot.com/o/backgrounds%2Fartificial-intelligence-blur-close-up-546819.jpg?alt=media&token=51432902-5454-4e86-a680-891ae44495b3"
          column
          justify="justify-start"
        >
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
            forwardedRef={currentWorkBlock}
          >
            <h3 className="headline-3">Coming Soon</h3>
          </Divider>
          <Animator
            inRef={currentWorkBlock}
            scrolled={scrolled}
            animation="a-wrapper--left"
            refName={name}
            maxWidth="maxw-1100px"
            marigin="0"
          >
            {currentWorks.map(work => {
              return <Iterable key={work.name} project={work} />;
            })}
          </Animator>
        </WindoW>
        <WindoW
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/gilesnugent-ee4d9.appspot.com/o/backgrounds%2Fartificial-intelligence-blur-close-up-546819.jpg?alt=media&token=51432902-5454-4e86-a680-891ae44495b3"
          column
        >
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
            forwardedRef={work}
          >
            <h3 className="headline-3">Completed Work</h3>
          </Divider>
          <Animator
            inRef={workBlock}
            scrolled={scrolled}
            animation="a-wrapper--left"
            refName={name}
            maxWidth="maxw-1100px"
            marigin="0"
          >
            <div className="flex column align-center justify-center">
              {works.map(work => {
                return <Iterable key={work.name} project={work} />;
              })}
            </div>
          </Animator>
        </WindoW>

        <WindoW
          justify="justify-start"
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/gilesnugent-ee4d9.appspot.com/o/backgrounds%2Fantique-black-classic-1416530.jpg?alt=media&token=1edbec80-07cc-46a3-ac88-d9d4566926cc"
          column
        >
          <Divider
            forwardedRef={about}
            border
            backgroundColor="background-primary"
            color="color-secondary"
          >
            <h1 className="headline-4">Eamonn and Ian, LLC</h1>
            <div className="flex row justify-center align-center wrap">
              <h5 className="headline-5">Stamford, CT</h5>{' '}
              <h5 className="headline-5"> |</h5>
              <h5 className="headline-5">{phone} </h5>
              <h5 className="headline-5"> |</h5>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="headline-5 color-white break"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=SUBJECT&body=BODY&bcc=${email}`}
              >
                {email}
              </a>
            </div>

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
          </Divider>
          <br />
          <div className="flex row align-center justify-center wrap w-90">
            <Animator
              inRef={aboutBlock}
              scrolled={scrolled}
              animation="a-wrapper--left"
              maxWidth="maxw-800px"
            >
              {/* <Block
                column
                type="info-card"
                backgroundColor="background-secondary--op"
                color="color-primary"
                maxWidth="w-90"
              >
                <h5 className="headline-4 color-secondary my-20px">Who Are We?</h5>
                <div className="flex row align-center wrap my-10px justify-center">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://apps.apple.com/us/developer/eamonn-and-ian-llc/id351040467"
                  >
                    <i className="fab fa-app-store text-decoration-none color-secondary" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/archon21"
                  >
                    <i className="fab fa-github-square text-decoration-none color-secondary" />
                  </a>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/gilesnugent/"
                  >
                    <i className="fab fa-linkedin-in text-decoration-none color-secondary" />
                  </a>
                </div>
                <p className="body-1 color-secondary p-20px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Block> */}

              <Contact />
            </Animator>
          </div>
        </WindoW>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.init.projects,
  works: state.init.works,
  currentWorks: state.init.currentWorks,
  email: state.init.email,

  phone: state.init.phone,
  company: state.init.company
});

export default connect(mapStateToProps)(Home);
