import { portfolio } from "@/content/portfolio.vi";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <div className="contact-grid">
            <div>
              <p className="eyebrow eyebrow-inverse">Bắt đầu cuộc trao đổi</p>
              <h2 id="contact-title">Liên hệ</h2>
              <p className="contact-intro">
                Nếu bạn muốn trao đổi về cơ hội nghề nghiệp hoặc một bài toán nghiên cứu, tôi luôn sẵn sàng kết nối.
              </p>
              <a className="button button-light" href={`mailto:${portfolio.contact.email}`}>
                Gửi email
              </a>
            </div>
            <dl className="contact-list">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
                    {portfolio.contact.linkedinLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Điện thoại</dt>
                <dd>
                  <a href={`tel:${portfolio.contact.phone}`}>{portfolio.contact.phoneDisplay}</a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
