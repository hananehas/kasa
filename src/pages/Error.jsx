import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import'./Error.scss';
function Error() {
  return (
    <div>
      <div className="error-container">
        <Header />
        <div className="error-content">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="back">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error