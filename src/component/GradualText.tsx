import React, { useEffect, useState, useMemo } from "react";

interface GradualTextProps {
  text: string;
  delay?: number;
}

const GradualText: React.FC<GradualTextProps> = ({ text, delay = 500 }) => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  // Memoize textLines to prevent recalculating on every render
  const textLines = useMemo(() => text.split("\n"), [text]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < textLines.length) {
        setVisibleLines((prevLines) => [...prevLines, textLines[index]]);
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [textLines, delay]);

  return (
    <div>
      {visibleLines.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
};

export default GradualText;
