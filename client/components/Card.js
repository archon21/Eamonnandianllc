import React, { Component } from 'react';

class Card extends Component {
  state = {
    selected: { desc: {} },
    shumbo: {
      name: 'Mrs. Shumbo',
      desc: {
        para:
          'I hope you have had a good Mothers Day weekend, you and your family have been so welcoming to me since I started dating Ashley. You are a very caring person and I know your daughter thinks the world of you, and coming from Ashley that means alot. If anybody deserves a relaxing mothers day it is you.',
        title: 'To a Superb Mother'
      }
    },
    mom: {
      name: 'Mom',
      desc: {
        title: 'To the best',
        para:
          'Thank you for everything you do and everything that you have done, you really are the best mother a son could ask for and I will continue to work hard and make your proud. Your work ethic is something that I admire so much about you and the fact that you always put others before yourself. Love you.'
      }
    },
    side: 'front',
    showing: false
  };

  componentDidMount() {
    const { pathname } = this.props.history.location;
    const pathnameArr = pathname.split('/');
    const selected = this.state[pathnameArr[pathnameArr.length - 1]];
    this.setState({ selected });
  }

  handleCardClick = () => {
    if (this.state.side === 'front') {
      this.setState({ side: 'back', showing: false });
    } else {
      this.setState({ side: 'front', showing: false });
    }
  };

  handleDisplay = () => {
    setTimeout(() => {
      this.setState({ showing: true });
    }, 200);
  };

  render() {
    const { selected, side, showing } = this.state;
    const { name, desc } = selected;
    showing === false && this.handleDisplay();
    return (
      <div className="flex column align-center justify-center minh-100vh w-100">
        <div id="card" className="flex row" onClick={this.handleCardClick}>
          {side === 'front' ? (
            <div
              className={`${showing &&
                'showing'} front flex row wrap align-center justify-center`}
            >
              <img
                className="card__img"
                src="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/MothersDay.png?alt=media&token=29ef222e-6798-4733-aa9e-bd8c2729bc9a"
              />
              <div className="flex column">
                <span className="headline-4 color-white">To: {name}</span>
                <span className="headline-4 color-white">From: Ryan</span>
              </div>
            </div>
          ) : (
            <div
              className={`${showing &&
                'showing'} back flex column wrap align-center justify-center`}
            >
              <span className="headline-4 color-white text-center">
                {desc.title}
              </span>
              <span className="headline-5 color-white">{desc.para}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
