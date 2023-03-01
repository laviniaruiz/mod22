// export default function Footer() {
//     return (
//       <div className="footer">

//         <p>This was coded by Lala - hosted on Netlify</p>

//       </div>
//     );
//   }

import React from "react";

function Footer() {
  return (
    <div>
      <footer>

        <p className="CodedBy">
          {" "}
          Coded by Lala <a href="https://github.com/laviniaruiz/mod2project">
            {" "}
            @Github!{" "}
          </a>{" "}
          
        </p>
      </footer>
    </div>
  );
}
export default Footer;