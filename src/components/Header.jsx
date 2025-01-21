import Logo from '../assets/sawako.jpg'

export default function Header() {

    return (
        <div className="flex justify-between py-3 px-10 items-center">
            <div className='flex items-center gap-4'>
                <img src={Logo} className="size-11 rounded-full"
                />
                <h1 className='font-semibold'> Portfolio </h1>
            </div>
            <ul className="flex gap-6 font-semibold">
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>

        </div>
    );
}