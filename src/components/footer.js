function Footer() {

    return (
        <div className="d-flex jc-center dir-column ai-center footer">
            <div className="d-flex jc-space-between ai-center" id="social">
                <span className="footerIcons"><i className="fab fa-facebook-f m-10"></i> FACEBOOK</span>
                <span className="footerIcons"><i className="fab fa-twitter m-10"></i> TWITTER</span>
                <span className="footerIcons"><i className="fab fa-instagram m-10"></i> INSTAGRAM</span>
            </div>

            <div id="footerSecond">
                <span>Created by Gerda Baltrusaityte</span>
            </div>
        </div>
    )
}

export default Footer;