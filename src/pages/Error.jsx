import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import'./Error.scss';
function Error() {
  return (
    <div>
      <div className="error-container">
        <Header />
       
      </div>
      <Footer />
    </div>
  )
}

export default Error