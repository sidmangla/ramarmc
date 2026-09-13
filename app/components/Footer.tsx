export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          RamaRMC · Ready mix concrete
          <br />
          Palwal, Haryana 121102
        </div>
        <div>
          <a href="tel:+917082538383">+91 70825 38383</a>
          <br />
          <a href="mailto:info@ramarmc.com">info@ramarmc.com</a>
        </div>
        <div>© {new Date().getFullYear()} RamaRMC</div>
      </div>
    </footer>
  );
}
