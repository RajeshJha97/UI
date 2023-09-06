import { PageLinks, SocialLinks } from '../data';
const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {PageLinks.map(({ id, href, title }) => {
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        {SocialLinks.map(({ id, href, social }) => {
          return (
            <li key={id}>
              <a href={href} target='_blank' className='footer-icon'>
                <i className={social}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
