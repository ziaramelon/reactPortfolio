import {Link} from 'react-router-dom';

function Button() {
  return (
    <Link to='/about' className='bg-green-800 rounded-md text-white py-3 px-2'>About Me</Link>
  );
};

export default Button