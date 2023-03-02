import { Link } from "react-router-dom"

export default function Nav(props) {
    return (
      <div className="nav">
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <Link to="/about">About</Link>
        </div>

        <div>
          <Link to="/contact">Contact</Link>
        </div>
        
      </div>
    );
  }