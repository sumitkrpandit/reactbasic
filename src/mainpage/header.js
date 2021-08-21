import logo from './globomantics.png';

const Header = () => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
            Providing Houses all over the World
        </div>
    </header>
)

export default Header;