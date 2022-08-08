import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-block1">
        <h1 className="footer-1">Smart Academy</h1>
        <h4 className="footer-1-1">Address</h4>
        <p className="content-1">
          Revenue tower. Fifth floor,
          <br /> Room no. 1234, Changanasseri.
          <br /> Kottayam.
        </p>
        <h4 className="footer-1-1">Call Us</h4>
        <p className="content-1">+91 90373 18303</p>
      </div>
      <div className="footer-block2">
        <h1 className="footer-1">Business Time</h1>
        <p className="content-1">Monday - saturday</p>
        <p className="content-1">9.00 AM - 5.00PM</p>
        <p className="content-1">SUNDAY - CLOSED</p>
        <div className="icons">
          <i className="footerIcon fab fa-facebook-square"></i>
          <i className="footerIcon fab fa-instagram-square"></i>
          <i className="footerIcon fab fa-twitter-square"></i>
        </div>
      </div>
      <div className="footer-block3">info@smartacademyedu.in</div>
    </div>
  );
};

export default Footer;
