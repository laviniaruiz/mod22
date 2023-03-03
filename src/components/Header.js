import { Link } from "react-router-dom"

export default function Header(props) {
    return (

      <div className="header">

          <h1> The page of </h1>

        <div>
          {/* <img style={{ width: "300px" }} src={require("../la.jpg")} alt="la"></img> */}
        <img style={{ width: "100px"}} src={require("../logo.jpg")} alt="logo"></img>
        </div>

      </div>

    );
  }