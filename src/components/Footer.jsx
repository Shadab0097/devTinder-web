import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import devTinderLogo from "../asset/DevTinder (2).png"


const Footer = () => {
    const user = useSelector(store => store.user)

    return (
        <footer className="footer bg-base-200 text-base-content items-center p-6 fixed bottom-0 sm: grid-flow-row  grid-flow-col">
            <aside>
                <div className=" sm:w-40 sm:h-40 w-20 h-20">
                    {/* <Link to={user && "/"} className="btn btn-ghost text-xl text-black bg-gradient-to-r from-cyan-100 to-slate-400 ">👨🏿‍💻DevTinder</Link> */}
                    <Link to={user && "/"} ><img src={devTinderLogo} className="" /></Link>
                </div>
            </aside>
            {/* <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> */}
            <nav>
                <h6 className="footer-title">Company</h6>
                < Link to="/aboutus" className="link link-hover">About us</Link>
                <Link to="/contactus" className="link link-hover">Contact Us</Link>
                {/* <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a> */}
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link to="/termofservice" className="link link-hover">Terms of service</Link>
                <Link to="/privacypolicy" className="link link-hover">Privacy policy</Link>
                <Link to="/refundpolicy" className="link link-hover">Refund policy</Link>
            </nav>
        </footer>
    )
}

export default Footer