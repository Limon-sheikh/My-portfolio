
import Navlogo from '../components/Logo' //navber logo
import Navlink from '../components/List' //navber list
import Button from '../components/Button'; // navber button

const Home = () => {
    return (
        <header>
            <nav className='container mx-auto p-3 bg-green-400 flex justify-between items-center'>
                <Navlogo/>
                <Navlink/>
                <Button/>
            </nav>
        </header>
    );
};

export default Home;