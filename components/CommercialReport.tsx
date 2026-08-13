import type { CSSProperties, ReactNode } from "react";
import type { CommercialReportData, ReportElementNode, ReportNode } from "@/content/commercialReports";

type RendererProps = {
  node: ReportNode;
  keyPath: string;
};

const allowedStyleKeys = new Set([
  "width",
  "color",
  "fontWeight",
  "fontSize",
  "borderLeftColor",
]);

function toStyle(style?: Record<string, string>): CSSProperties | undefined {
  if (!style) return undefined;
  const safe: Record<string, string> = {};
  for (const [key, value] of Object.entries(style)) {
    if (allowedStyleKeys.has(key)) safe[key] = value;
  }
  return Object.keys(safe).length ? (safe as CSSProperties) : undefined;
}

function renderChildren(node: ReportElementNode, keyPath: string): ReactNode[] {
  return (node.children ?? []).map((child, index) => (
    <ReportRenderer key={`${keyPath}-${index}`} node={child} keyPath={`${keyPath}-${index}`} />
  ));
}

function ReportRenderer({ node, keyPath }: RendererProps): ReactNode {
  if (node.type === "text") return node.value;

  const className = node.classes?.length
    ? node.classes.map((name) => `business-${name}`).join(" ")
    : undefined;
  const style = toStyle(node.style);
  const children = renderChildren(node, keyPath);

  switch (node.tag) {
    case "div":
      return <div className={className} style={style}>{children}</div>;
    case "h1":
      return <h1 className={className} style={style}>{children}</h1>;
    case "h2":
      return <h2 className={className} style={style}>{children}</h2>;
    case "h3":
      return <h3 className={className} style={style}>{children}</h3>;
    case "h4":
      return <h4 className={className} style={style}>{children}</h4>;
    case "p":
      return <p className={className} style={style}>{children}</p>;
    case "span":
      return <span className={className} style={style}>{children}</span>;
    case "b":
      return <strong className={className} style={style}>{children}</strong>;
    case "br":
      return <br />;
    case "ul":
      return <ul className={className} style={style}>{children}</ul>;
    case "ol":
      return <ol className={className} style={style}>{children}</ol>;
    case "li":
      return <li className={className} style={style}>{children}</li>;
    case "table": {
      const rows = (node.children ?? []).filter(
        (child): child is ReportElementNode => child.type === "element" && child.tag === "tr",
      );
      const firstRow = rows[0];
      const firstRowHasHeaders = firstRow?.children?.some(
        (child) => child.type === "element" && child.tag === "th",
      );
      const bodyRows = firstRowHasHeaders ? rows.slice(1) : rows;

      return (
        <div className="business-table-scroll">
          <table className={className} style={style}>
            {firstRowHasHeaders && (
              <thead>
                <ReportRenderer node={firstRow} keyPath={`${keyPath}-head`} />
              </thead>
            )}
            <tbody>
              {bodyRows.map((row, index) => (
                <ReportRenderer key={`${keyPath}-body-${index}`} node={row} keyPath={`${keyPath}-body-${index}`} />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case "tr":
      return <tr className={className} style={style}>{children}</tr>;
    case "th":
      return <th className={className} style={style}>{children}</th>;
    case "td":
      return <td className={className} style={style}>{children}</td>;
    default:
      return <>{children}</>;
  }
}

export function CommercialReport({ report, brand }: { report: CommercialReportData; brand: string }) {
  return (
    <article
      className="commercial-report"
      aria-label={`Báo cáo kinh doanh ${brand}`}
      style={{ "--report-accent": report.accent } as CSSProperties}
    >
      {report.nodes.map((node, index) => (
        <ReportRenderer key={`report-${index}`} node={node} keyPath={`report-${index}`} />
      ))}
    </article>
  );
}
