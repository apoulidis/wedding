import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-heart">♥</p>
      <p className="footer-text">Made with love · {new Date().getFullYear()}</p>
    </footer>
  );
}
