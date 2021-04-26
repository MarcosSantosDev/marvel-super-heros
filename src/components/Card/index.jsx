import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../container/App/index.css';

const Card = ({ removePerson, person }) => {
  const handleRemove = () => {
    removePerson(person.id);
  }

  return (
    <div className="row">
      <div className="col s8">
        <div className="card cardMarvel">
          <div className="card-image">
            <img
              className="imageMarvel"
              src={`${person.thumbnail.path}.${person.thumbnail.extension}`}
              alt={person.name}
            />
            <Link className="btn-floating halfway-fab waves-effect waves-light blue" to={`/details/${person.id}`}>
              <i
                style={{ border: "2px", borderColor: "black" }}
                className="material-icons"
              >
                info
              </i>
            </Link>
          </div>
          <div className="card-content">
            <span style={{ fontSize: "14px" }} className="grey-text text-darken-4">
              {person.name}
            </span>
          </div>
          <div className="center">
            <div className="buttonRemove" onClick={handleRemove} >
              <i className="material-icons">delete</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  removePerson: PropTypes.func,
  person: PropTypes.object,
}

export default Card;
