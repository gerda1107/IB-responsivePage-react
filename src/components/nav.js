import { Link } from 'react-router-dom';

function Nav({showNav, navIconClass}) {

    return (
        <div>
            <nav className="d-flex jc-center">
                <div className="navbar d-flex jc-space-between ai-center">
                    <div className="title d-flex ai-center">
                        <div><i className="fab fa-stumbleupon-circle"></i></div>
                    </div>

                    <div className="options d-flex jc-space-evenly">
                        <Link to="/">HOME</Link>
                        <Link to="/">SHOP</Link>
                        <Link to="/">REVIEWS</Link>
                        <Link to="/">BLOG</Link>
                    </div>

                    <div className="hidden-menu">
                        <div><i className={navIconClass} onClick={showNav}></i></div>
                        <div className="d-flex dir-column jc-space-evenly ai-center" id="hidden-menu-options">
                            <Link to="/">HOME</Link>
                            <Link to="/">SHOP</Link>
                            <Link to="/">REVIEWS</Link>
                            <Link to="/">BLOG</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;