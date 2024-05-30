import { Typography, TypographyProps } from "@mui/material";
import { useState } from "react";

interface ReadMoreProps extends TypographyProps {
  id: string;
  text: string;
  amountOfWords?: number;
}

function ReadMore({
  id,
  text,
  amountOfWords = 36,
  ...otherProps
}: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const splittedText = text.split(" ");
  const isOverflow = splittedText.length > amountOfWords;
  const beginText = isOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(" ")
    : text;
  const endText = " " + splittedText.slice(amountOfWords - 1).join(" ");

  const handleKeyboard = (e: React.KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      setIsExpanded(!isExpanded);
    }
  };

  const btnStyle = {
    display: "inline-block",
    marginLeft: "0.5rem",
    color: "#009688",
    cursor: "pointer",
    textDecoration: "underline",
  };

  return (
    <Typography id={id} {...otherProps}>
      {beginText}
      {isOverflow && (
        <>
          {!isExpanded ? (
            <span>... </span>
          ) : (
            <span aria-hidden={!isExpanded}>{endText}</span>
          )}

          <span
            role="button"
            style={btnStyle}
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "show less" : "show more"}
          </span>
        </>
      )}
    </Typography>
  );
}

export default ReadMore;
