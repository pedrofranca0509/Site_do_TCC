import { Link } from "react-router-dom"


function Montagem() {
  return (
    <div>
      <h1>Montagem</h1>
      <Link to={"/objetivo"}> Proxima pagina</Link>
      <Link to={"/material"}> Proxima pagina</Link>
    </div>
  )
}

export default Montagem