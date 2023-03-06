import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    
    <div>

      <div className='c3'>
        <h1> Contact Us </h1>
      </div>

      <p className="c1">
        <Link to="https://github.com/laviniaruiz/mod2project">@Github</Link>
      </p>

      <p className="c2">
        <Link to="https://github.com/laviniaruiz/mod2project">@Netlify</Link>
      </p>

        {/* <p className="c3">
          <Link to="https://github.com/laviniaruiz/mod2project">Leave Comment</Link>
        </p> */}

    </div>
  );
}