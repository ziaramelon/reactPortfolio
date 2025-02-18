import Logo from '../assets/sawako.jpg';
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <div className="flex justify-between py-3 px-10 items-center">
            <div className='flex items-center gap-4'>
                <img src={Logo} className="size-11 rounded-full"
                />
                <h1 className='font-semibold text-xl'> Portfolio </h1>
            </div>
            <ul className="flex gap-6 font-semibold text-xl pr-4">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

        </div>
    );
}