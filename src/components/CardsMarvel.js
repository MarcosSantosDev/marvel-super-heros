import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class CardsMarvel extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(){
    this.props.removePerson(this.props.person.id);
  }

  render() {
    const { person } = this.props;
    return (
        <div className="cardMarvel" >
          <div id="buttonRemove">
            <button type="submit" className="buttonRemove" onClick={this.handleRemove} >X</button>
          </div>
          <div>
            <div>
              <Link to={`/details/${person.id}`}>
                <img src={person.thumbnail.path + "." + person.thumbnail.extension} alt={person.name} className="imageMarvel" />
              </Link>
            </div>
            <div className="personName">
              <h5>{person.name}</h5>
            </div>
          </div>
        </div>
    );
  }
}

export default CardsMarvel;
