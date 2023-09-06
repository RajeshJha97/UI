import logo from '../images/logo.svg';
import { PageLinks, SocialLinks } from '../data';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className='nav-links' id='nav-links'>
          {PageLinks.map(({ id, href, title }) => {
            return (
              <li key={id}>
                <a href={href} className='nav-link'>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className='nav-icons'>
          {SocialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} target='_blank' className='nav-icon'>
                  <i className={link.social}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
