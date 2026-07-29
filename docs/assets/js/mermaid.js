import mermaid from "https://unpkg.com/mermaid@10.9.1/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "strict"
});

const renderMermaid = () => mermaid.run({ querySelector: ".mermaid" });

if (typeof document$ !== "undefined") {
  document$.subscribe(renderMermaid);
} else {
  document.addEventListener("DOMContentLoaded", renderMermaid);
}