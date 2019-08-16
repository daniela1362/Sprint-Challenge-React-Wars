export default App;

import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCard from "./components/CharacterCard.js";
import { Container } from 'semantic-ui-react';

const App = () => {
  const App = () => {
  const[swCharacter, setSwCharacter] = useState ([]);

  useEffect(() => {
  axios
  .get("https://swapi.co/api/people/")
  .then(res => { 
  setSwCharacter(res.data.results);
  })
.catch (err => {
  console.log(err);
})
  }, []);

console.log("test", swCharacter);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container className="container-cards">
      <CharacterCard characters={swCharacter}/>
      </Container>
    </div>
  );