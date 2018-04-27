import React, { Component } from 'react';
import API from '../utils/axios';
import MakeSearchCard from './MakeSearchCard';

export default class DetailsCard extends Component {
  constructor(){
    super();
    this.state = {
      detailsCard: [],
    }
  }

  componentWillMount(){
    const id = this.props.match.params.id;
    console.log(id)
    API.get(`characters/${id}`)
    .then((response) => {
      this.setState({
        detailsCard: response.data.data.results,
      })
  })
    .catch((error) => {
      console.log(error);
      return error;
    })
  }

  render(){
    return (
      <div>
        <MakeSearchCard data={this.state.detailsCard} />
      </div>
    )
  }
}
