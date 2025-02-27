import './navigation-styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='logo-container'>
        <Logo className='logo' />
      </div>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
      </div>
    </div>
  );
};

export default Navigation;