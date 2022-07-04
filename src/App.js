import "./App.css";

function App() {
  const name = "Mati"; //variable for storing name
  const isMale = true;
  //Block Element Modifier

  function getGreetings(user) {
    if (user) {
      return <h4>Hello, {user}!</h4>;
    } else {
      return <h5>Hello Stranger!</h5>;
    }
  }
  return (
    <div className="App">
      <div className="app__title">Hello World</div>
      <div className="app__title--large">Hello World</div>
      <div className="app__title--small">Hello World</div>
      <h1>{getGreetings("Matiz")}</h1>
      <hr></hr>
      <h2>~{name}</h2>
      <h3>You are a {isMale ? "Male" : "Female"}</h3>
    </div>
  );
}

export default App;
