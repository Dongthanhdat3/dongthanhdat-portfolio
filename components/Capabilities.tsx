import { portfolio } from "@/content/portfolio.vi";
import { Reveal } from "./Reveal";
import { ToolShowcase } from "./ToolShowcase";

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

      </div>
      <ToolShowcase />
    </section>
  );
}
