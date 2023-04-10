import React from 'react';
// icon
import searchIcon from '../images/search-alt.svg';
// style
import '../styles/Search.css';

const Search = () => {
  return (
    <section data-aos="zoom-out" className="SearchSection">
      <h3>Starting at $10 per month</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        exercitationem?
      </p>
      <div className="SearchDiv">
        <input type="text" placeholder="Enter domain name here..." />
        <button>
          <img src={searchIcon} alt="icon" />
          Search
        </button>
      </div>
      <ul>
        <li>.com $9</li>
        <li>.sg $10</li>
        <li>.space $11</li>
        <li>.info $14</li>
        <li>.net $10</li>
        <li>.xyz $10</li>
      </ul>
    </section>
  );
};

export default Search;
