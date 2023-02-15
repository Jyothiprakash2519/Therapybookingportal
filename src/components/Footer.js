import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Therapify</h1>
          <p>
            Therapy On Your Schedule. Text, Phone & Online Therapy With a Local
            Licensed Therapist.
          </p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-behance-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Navigation</h4>
          <a href="/">About Us</a>
          <a href="/">Report a Problem</a>
          <a href="/">Online Pyschiatric Consultation</a>
          <a href="/">Therapies</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Issues</a>
          <a href="/">Blog</a>
          <a href="/">Wellness Blogs</a>
          <a href="/">FAQs</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">privacy policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
