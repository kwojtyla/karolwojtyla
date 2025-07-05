import React from "react";

export const interpolateText = (
  text: string,
  components: Record<string, React.ReactNode>,
): React.ReactNode[] => {
  return text.split(/(\{[^}]+\})/).map((part, index) => {
    const match = part.match(/\{([^}]+)\}/);
    if (match && components[match[1]]) {
      return (
        <React.Fragment key={index}>{components[match[1]]}</React.Fragment>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};
