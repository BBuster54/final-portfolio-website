"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({ text, speed = 30 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const reset = setTimeout(() => setDisplayed(""), 0);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => {
      clearTimeout(reset);
      clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <>
      {displayed}
      <span className="animate-pulse text-accent">|</span>
    </>
  );
}