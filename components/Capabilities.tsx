import { portfolio } from "@/content/portfolio.vi";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "./Reveal";

function CapabilityList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="capability-column">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities-section" aria-labelledby="capabilities-title">
      <div className="container">
        <Reveal>
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Phương pháp & công cụ</p>
              <h2 id="capabilities-title">Năng lực nghiên cứu & phân tích</h2>
            </div>
            <p>
              Từ thiết kế nghiên cứu đến kiểm định mô hình, trọng tâm là giữ mạch liên kết giữa câu hỏi kinh doanh, dữ liệu và quyết định.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="capability-grid">
            <CapabilityList title="Năng lực nghiên cứu" items={portfolio.capabilities.research} />
            <CapabilityList title="Năng lực phân tích" items={portfolio.capabilities.analysis} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="tool-gallery" aria-label="Công cụ phân tích">
            {portfolio.tools.map((tool, index) => (
              <div className="tool-item" key={tool.name} style={{ "--tool-index": index } as CSSProperties}>
                <div className="tool-object-stage" aria-hidden="true">
                  <div className="tool-object">
                    <Image src={tool.image} alt="" width={640} height={640} sizes="180px" />
                  </div>
                </div>
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
