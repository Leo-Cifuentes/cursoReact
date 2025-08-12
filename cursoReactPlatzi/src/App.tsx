import Counter from "./components/Counter"
import ToggleButton from "./components/ToggleButton"
import NameForm from "./components/NameForm"
import './App.css'
import CounterWithEffect from "./components/CounterWithEffect"

function App() {  
  return (
    <>
    <section>
      <Counter/>
    </section>
    <section>
      <ToggleButton/>
    </section>
    <h2>Formulario nombre:</h2>
    <NameForm/>
    <section>
      <CounterWithEffect/>
    </section>
    </>
  )
}

export default App;
