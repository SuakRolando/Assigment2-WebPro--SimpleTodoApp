import React from "react";
import "../../styles/styles.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="fixed-bottom bg-lilac pt-4 shadow-lg">
        <center>
          <p className="text-light fw-light fs-5">&copy; Suak, Rolando 2021</p>
        </center>
      </div>
    );
  }
}
export default Footer;
