import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {

    return (
      <div className="searchbar-container">
        <input className="search-bar" placeholder="search for COAs"></input>
        <button className="search-button" type="submit">Search</button>
      </div>
    )
  }
}

export default Search;