import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>TrippY</h1>
                    <p>Choose Your Favourite Destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square" />
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square" />
                    </a>
                    <a href="">
                        <i className="fa-brands fa-twitter-square" />
                    </a>
                    <a href="">
                        <i className="fa-brands fa-behance-square" />
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">Licence</a>
                    <a href="/">All Version</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issue</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">TroubleShooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms and Service</a>
                    <a href="/">Privacy and Policy</a>
                    <a href="/">Licence</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;