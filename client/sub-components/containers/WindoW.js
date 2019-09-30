import React from 'react';

const WindoW = props => {
  const { backgroundUrl, background, justify, maxWidth, column, padding, video, align } = props;
  return (
    <div
      style={{overflowX: 'hidden', backgroundImage: `url(${backgroundUrl})` }}
      className={`${background && background} ${padding &&
        padding} ${backgroundUrl && 'background-cover'} flex ${
        column ? 'column' : 'row'
      }
      ${video && 'maxw-100vw maxh-100vh'}
      ${maxWidth && maxWidth}
      wrap ${align ? align : 'align-center'} ${justify ? justify : 'justify-center'} window minh-100vh`}
    >
      {props.children}
    </div>
  );
};

export default WindoW;
