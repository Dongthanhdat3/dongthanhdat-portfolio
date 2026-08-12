import { portfolio } from "@/content/portfolio.vi";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p>© 2026 {portfolio.person.name}</p>
          <p>{portfolio.person.role}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${portfolio.contact.email}`}>Email</a>
          <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
