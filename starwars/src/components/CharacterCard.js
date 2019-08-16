import React from "react";
import { Card, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
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