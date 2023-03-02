import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <contact>

        <p className="c1">
          <Link to="https://github.com/laviniaruiz/mod2project">@Github</Link>
        </p>

        <p className="c2">
          <Link to="https://github.com/laviniaruiz/mod2project">Leave Comment</Link>
        </p>

      </contact>
    </div>
  );
}