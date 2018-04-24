import React, { Component } from 'react';
import API from '../utils/axios';
import CardsMarvel from './CardsMarvel';
import '../App.css';

class SearchContainer extends Component  {
    constructor(){
        super();
        this.state = {
            searchPerson: '',
            dataMarvel: []
        }
        this.removePerson = this.removePerson.bind(this);
    }

    removePerson(userid){
        console.log("Fui Clicado!!!", userid)
    }

    componentDidMount(){
           API.get('characters')
        .then((response) => {
                this.setState({
                    dataMarvel: response.data.data.results,
                })
        })
        .catch((error) => {
          console.log(error)
        });
    }

    render(){
        const { dataMarvel } = this.state;
        console.log("DATA", dataMarvel)
        return(
            <div>
              {
                dataMarvel.map(person => {
                   return <CardsMarvel
                   key={person.id}
                   person={person}
                   removePerson={this.removePerson}
                    />
                })
              }
            </div>
        );
    }
}

export default SearchContainer;
