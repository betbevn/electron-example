import { Textarea } from "@mantine/core";

import { useEffect, useState } from "react";
import GradualText from "./component/GradualText";

function Root() {
  const [highlightedText, setHighlightedText] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const handleSetText = (text: string) => {
      setHighlightedText(text);

      const exampleResult = `Hello there!
      Welcome to our site.
      Enjoy your stay.
      Let us know if you need anything.`;

      setResult(exampleResult);
    };

    window.electronAPI.onSetText(handleSetText);
  }, []);

  return (
    <div>
      <div style={{ padding: 20 }}>
        <Textarea
          label="What can I help with?"
          description="Command + C then Command + Shift + B to search"
          value={highlightedText}
          onChange={(event) => setHighlightedText(event.currentTarget.value)}
        />
      </div>
      <GradualText text={result} delay={1000} />
    </div>
  );
}

export default Root;
