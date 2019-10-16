import React, { useState } from 'react';
import { Route } from "react-router-dom";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie"
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );


  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route exact path="/" component={MovieList}/>
      <Route path="/movies/:id" render={props => {
        const { id } = props.match.params;
        return <Movie id={id}/>
      }}/>
      <SavedList list={savedList} />
    </div>
  );
};

export default App;
