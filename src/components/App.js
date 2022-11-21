import Lista from "./Lista";

function App() {
  const stampa = () => { // = function Stampa(){console.log...}
    console.log('App is running...')
  }
  return (
    <div>
      <Lista/>
    <p> {stampa()} </p>
    </div>
  );
}

export default App;
