import Markdown from "react-markdown";
import Exp from "./markdowndocs/Experiences.md";

function Experiences() {
  const customReactComponents = {
    h1: ({ ...props }) => <h1 style={{ color: "gray" }} {...props} />,
    h2: ({ ...props }) => <h2 style={{ color: "gray" }} {...props} />,
    strong: ({ ...props }) => <strong style={{ color: "gray" }} {...props} />,
    a: ({ ...props }) => <a style={{ color: "blue" }} {...props} />,
  };
  return (
    <div className="prose dark:text-white">
      <Markdown components={customReactComponents}>{Exp}</Markdown>
    </div>
  );
}

export default Experiences;
