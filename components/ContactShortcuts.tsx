import { Linkedin, Mail, Phone } from "lucide-react";
import { portfolio } from "@/content/portfolio.vi";

const shortcuts = [
  {
    label: "Email",
    detail: portfolio.contact.email,
    href: `mailto:${portfolio.contact.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    detail: "LinkedIn",
    href: portfolio.contact.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Điện thoại",
    detail: portfolio.contact.phoneDisplay,
    href: `tel:${portfolio.contact.phone}`,
    icon: Phone,
    external: false,
  },
] as const;

export function ContactShortcuts() {
  return (
    <div className="contact-shortcuts" aria-label="Liên hệ nhanh">
      {shortcuts.map(({ label, detail, href, icon: Icon, external }) => (
        <a
          key={label}
          className="contact-shortcut"
          href={href}
          aria-label={`${label}: ${detail}`}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
          <span className="contact-tooltip" role="tooltip">
            {detail}
          </span>
        </a>
      ))}
    </div>
  );
}
