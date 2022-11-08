import { Link } from "react-router-dom"; //si potrebbe usare html ma si caricherebbe nuova pagina, con questo componente invece si cambia route senza aggiornare pagina

import classes from "./MainNavigation.module.css";


function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>1Percent</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/negozi">Negozi</Link>
          </li>
          <li>
            <Link to="/lotteria">Lotteria</Link>
          </li>
          <li>
            <Link to="/pay">PAY!</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
