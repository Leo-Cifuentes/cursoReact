import Card from "./components/card"
import './App.css'

function App() {
  const items: string[] = ["React","JavaScript","Vite"];

  return (
    <>
    <section>
      <h1>¡Hola mundo!</h1>
      <Card title="card 1" description="Esta es una descripción" />
      <Card title="card 2" description="Esta es otra descripción" />
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>      
    </>
  )
}

export default App
