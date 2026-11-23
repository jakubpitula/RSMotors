export const Footer = () => {
  return (
    <footer>
      <div className="footer-brand">
        <a className="brand brand-light" href="#home">
          <span className="brand-mark">
            <span>RS</span>
          </span>
          <span className="brand-name">
            <strong>RS</strong>
            <span>Rising Sun Motors</span>
          </span>
        </a>
        <p>
          Selected Japanese cars &amp;
          <br />
          modern classics in Ireland.
        </p>
      </div>
      <div className="footer-links">
        <div>
          <strong>Explore</strong>
          <a href="#cars">Cars for Sale</a>
          <a href="#import">Import to Order</a>
          <a href="#about">About Us</a>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:">Email us</a>
          <a href="tel:">Call us</a>
          <span>Viewings by appointment</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 RS Rising Sun Motors</span>
        <span>Privacy &amp; Cookies</span>
      </div>
    </footer>
  );
};
