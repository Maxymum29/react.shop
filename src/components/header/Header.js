function Header() {
    return (
        <nav className=" green lighten-1">
            <div className="nav-wrapper">
                <a
                    href="https://maxymum29.github.io/react.shop/"
                    className="brand-logo"
                >
                    React shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/Maxymum29/react.shop">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
