import React from 'react';
import '../../styles/styles.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="fixed-bottom bg-lilac pt-4 shadow-lg">
          <center>
        <p className="text-light fw-light fs-5">
        &copy; Suak, Rolando 2021
      </p>   
      </center>
      </div>
    );
  }
}
export default Footer;

{/* <footer className="text-center footer" style="color: aliceblue;">
      <p className="fs-6">made with
          <i className="fab fa-js-square"></i>
          <i className="fab fa-bootstrap"></i>
          <i className="fab fa-css3-alt"></i><br>
          rolandoS <i className="fas fa-fire" style="color: red;"></i> &copy; 2021
      </p>   
    </footer> */}