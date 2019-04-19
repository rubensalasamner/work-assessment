import React from 'react';

const Searchbar = ({search}) => {

   console.log(search);
   return(
    <div>
        <form onSubmit={search}>
            <input className="form-control testing" name="search" type="text" placeholder="Search Movie.." aria-label="Search" autoComplete="off"></input>
            <button type="submit">Search</button>
        </form>
    </div>
   )
    
};

export default Searchbar;