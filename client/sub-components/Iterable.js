import React from 'react';
import { Flex } from './containers';

const Iterable = props => {
  const {
    name,
    desc,
    siteLink,
    codeLink,
    status,
    type,
    img,
    tools
  } = props.project;
  return (
    <div className="iterable flex column align-center w-90">
      <div className="iterable__inner flex row wrap justify-center align-center">
        <div className="flex column align-center iterable__inner__text">
          <div className="flex column align-center">
            <h4 className="headline-4 color-secondary text-center">{name}</h4>
            <span className="body-1 color-secondary text-center">{status}</span>
            <span className="body-1 color-secondary text-center">{type}</span>
          </div>
          {desc && (
            <p className="body-1 color-secondary p-20px maxw-600px">{desc}</p>
          )}

          {tools && (
            <ul
              style={{ height: '140px' }}
              className="flex column wrap w-100 maxw-600px"
            >
              {tools.map(tool => {
                return (
                  <li key={tool} className="body-1 color-secondary p-5px">
                    {tool}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="flex column align-center">
          {siteLink && (
            <div className="iterable__inner__link">
              <img className="work__image w-100 h-100 object-cover" src={img} />
              {siteLink !== 'img' && (
                <a
                  target="_blank"
                  href={siteLink}
                  className="work__image--overlay"
                />
              )}
            </div>
          )}

          {codeLink && (
            <a
              target="_"
              href={codeLink}
              className="iterable__inner__code flex align-center justify-center"
            >
              View Code
            </a>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Iterable;
