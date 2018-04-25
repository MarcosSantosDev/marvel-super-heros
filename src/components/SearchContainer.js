import React, { Component } from 'react';
import API from '../utils/axios';
import CardsMarvel from './CardsMarvel';
import '../App.css';

class SearchContainer extends Component  {
    constructor(){
        super();
        this.state = {
            searchPerson: '',
            dataMarvel: [],
            originDataMarvel: []
        }
        this.removePerson = this.removePerson.bind(this);
        this.filterName = this.filterName.bind(this);
    }

    componentWillMount(){
      API.get('characters')
        .then((response) => {
            this.setState({
              dataMarvel: response.data.data.results,
              originDataMarvel: response.data.data.results
            })
        })
        .catch((error) => {
          console.log(error)
        });
    }

    removePerson(cardId){
      const { originDataMarvel } = this.state;
      const dataFiltred = originDataMarvel.filter(element => element.id !== cardId);

      this.setState({
        dataMarvel: dataFiltred,
        originDataMarvel: dataFiltred,
      })
    }

    filterName(event){
      const { originDataMarvel } = this.state;
      const dataMarvel = [...originDataMarvel];
      const inputValue = event.target.value;

      const dataFiltredByText = dataMarvel.filter(element => element.name.includes(inputValue));

      const validat = () => inputValue ? dataFiltredByText : dataMarvel;

      this.setState({
        dataMarvel: validat(),
      });

    }

    render(){
        const { dataMarvel } = this.state;

        return(
            <div className="mainDiv">
              <div className="titleMarvel">
                <h2>Tera Marvel</h2>
              </div>
              <div>
                <input type="text" className="inputOfTheSearch" onChange={this.filterName} placeholder="Digite um dos nomes abaixo.. " />
              </div>
              <div className="wrapper">
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
            </div>
        );
    }
}

export default SearchContainer;
