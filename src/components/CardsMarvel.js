import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'antd';
const { Meta } = Card;

class CardsMarvel extends Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);
    }

  handleRemove(){
    this.props.removePerson(this.props.person.id);
  }

  render() {
    const { person } = this.props;
    return (
      <Card hoverable style={{ width: 200, margin: 10 }} >
        <Button  type="danger" size="small" id="buttonRemove" onClick={this.handleRemove}><Icon type="close" /></Button>
        <Link to={`/details/${person.id}`} >
          <img src={person.thumbnail.path + "." + person.thumbnail.extension}
          alt={person.name} className="imageMarvel" />
        </Link>
        <Meta style={{ textAlign: "center", margin: 10}} title={person.name} />
      </Card>
    )
  }
}

export default CardsMarvel;
