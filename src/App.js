import "./App.css";
import "./assets/css/fonts.css";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./data/movies.json";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((elem, index) => {
        return (
          <Section category={elem.category} images={elem.images} key={index} />
        );
      })}
    </div>
  );
}

export default App;
