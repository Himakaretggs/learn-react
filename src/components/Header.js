import { LOGO_URL } from "../utlis/constants";

const Header = () => {
    return (
        <div className="container mb-3">
            <div className="navbar row">
                <div className="col-sm-2">
                    <div className="nav-logo">
                        <img src={LOGO_URL} alt="" />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="nav-items">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Items</a>
                            </li>
                            <li>
                                <a href="#">Locations</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;