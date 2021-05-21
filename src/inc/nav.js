import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav class="d-flex jc-center">
                <div class="navbar d-flex jc-space-between ai-center">
                    <div class="title d-flex ai-center">
                        <div><i class="fab fa-stumbleupon-circle"></i></div>
                    </div>

                    <div class="options d-flex jc-space-evenly">
                        <Link to="/">HOME</Link>
                        <a href="#">SHOP</a>
                        <a href="#">REVIEWS</a>
                        <a href="#">BLOG</a> 
                    </div>

                    <div class="hidden-menu">
                        <div><i class="fas fa-bars"></i></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;