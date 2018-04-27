import React, { Component } from 'react';

class MakeList extends Component {
  render() {
    const { title, list } = this.props;
    return (
      <div>
        <div>
         <h4>{title}</h4>
          <ul>
            {
              list.items.map((item, i) => <li key={i}>{item.name}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default MakeList;
