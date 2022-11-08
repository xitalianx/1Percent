import classes from "./Footer.module.css";


function Footer() {
  return (
    <footer>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className={classes.footercontent}>
            <h3>1Percent</h3>
            <p>1% can change your life</p>
            <ul className={classes.socials}>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className={classes.footerbottom}>
            <p>copyright &copy;2022 1Percent. </p>
        </div>
    </footer>
  );
}

export default Footer;