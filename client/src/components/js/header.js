import { Link } from 'react-router-dom';

import '../css/header.css'
import Logo from './logo';

function Header() {
    return (
        <header>
          <Logo/>
          <nav>
            {/* Temp nav placeholder */}
              <ul>
                  <li><Link className="link" to='/schedulepage'>Schedule</Link></li>
                  <li><Link className="link" to='/productivity'>Productivity</Link></li>
              </ul>
          </nav>
        </header>
    );
}

export default Header;