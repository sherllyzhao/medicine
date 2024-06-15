import { createRoot } from "react-dom/client";

export default function DirectiveRender(reactEle) {
  const container = document.createElement("div");
  document.body.append(container);
  const root = createRoot(container);
  root.render(reactEle);
  return function destroy() {
    root.unmount();
    container.remove();
  };
}
