import { Link } from 'react-router-dom';

/*ICON*/
import patient from './Icon/user.png'
import doctor from './Icon/doctor.png'
import calendar from './Icon/calendar.png'
import trend from './Icon/trend.png'
import cart from './Icon/shopping-cart.png'

function SecondNav() {
  return(

    <div className="col-2 grey text-center">
    <Link to="/newPatient">
      <img alt="patient" className="logo d-block img-fluid w-35 m-auto p-2" src={patient} />
      <p>Ajouter un patient</p>
    </Link>
    <Link to="/mypatients">
      <img alt="mes patients" className="logo d-block img-fluid w-35 m-auto p-2" src={doctor} />
      <p>Mes patients</p>
    </Link>
    <img alt="rendez-vous" className="logo d-block img-fluid w-35 m-auto p-2" src={calendar} />
    <p>Rendez-vous</p>
    <img alt="statistiques" className="logo d-block img-fluid w-35 m-auto p-2" src={trend} />
    <p>Statistiques</p>
    <img alt="caisse" className="logo d-block img-fluid w-35 m-auto p-2" src={cart} />
    <p>Caisse</p>
  </div>

  )
}

export default SecondNav;