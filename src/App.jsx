import "./App.css";
import Header from "./Header";
import List from "./List";
import Person from "./Person";
import Button from './Button'
function App() {
  return (
    <>
      <Person name={"Tushar"} age={21} />
      <Header title={"Heading "} />
      <List listItems ={['mango','banana','apple']}/>
      <Button text="text me" onClick={()=>console.log("button clicked")}/>
    </>
  );
}

export default App;
