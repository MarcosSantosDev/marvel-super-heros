import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class CardsMarvel extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removePerson(this.props.person.id);
  }

  render() {
    const { person } = this.props;
    return (
      <div className="row">
        <div className="col s8">
          <div className="card cardMarvel">
            <div className="card-image">
              <img src={person.thumbnail.path + "." + person.thumbnail.extension} alt={person.name} className="imageMarvel" />
              <Link to={`/details/${person.id}`}>
                <a class="btn-floating halfway-fab waves-effect waves-light blue"><i style={{ border: "2px", borderColor: "black" }} class="material-icons">info</i></a>
              </Link>
            </div>
            <div className="card-content">
              <span style={{ fontSize: "14px" }} className="grey-text text-darken-4">{person.name}</span>
            </div>
            <div className="center">
              <div className="buttonRemove" onClick={this.handleRemove} ><i class="material-icons">delete</i></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardsMarvel;
