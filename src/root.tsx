import { Button, Textarea } from "@mantine/core";

import { useEffect, useState } from "react";
import GradualText from "./component/GradualText";

const exampleResult = `Hello there!
Welcome to our site.
Enjoy your stay.
Let us know if you need anything.`;

function Root() {
  const [highlightedText, setHighlightedText] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const handleSetText = (text: string) => {
      setHighlightedText(text);
      setResult(exampleResult);
    };

    window.electronAPI.onSetText(handleSetText);
  }, []);

  const onSubmit = () => {
    if (highlightedText.length > 0) {
      setResult(exampleResult);
    }
  };

  return (
    <div>
      <div style={{ padding: 20 }}>
        <Textarea
          label="What can I help with?"
          description="Command + C then Command + Shift + B to search"
          value={highlightedText}
          onChange={(event) => setHighlightedText(event.currentTarget.value)}
        />
        <Button fullWidth onClick={onSubmit}>
          Search
        </Button>
      </div>
      <GradualText text={result} delay={1000} />
    </div>
  );
}

export default Root;
