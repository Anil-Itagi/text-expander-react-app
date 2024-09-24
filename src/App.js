import "./index.css";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <h1 className="heading">Text Expander APP</h1>
      <TextExpander color="darkgreen">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        cdNo={15}
        showMore="Show text"
        showLess="Close text"
        collapseButtonText="Collapse text"
        color="#ff6622"

      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next! .It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
    </div>
  );
}

function TextExpander({ children, cdNo = 10, showMore = "show more", showLess = "show less", color = "blue" }) {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const words = children.split(" ");
  const c = words.slice(0, cdNo);
  const cfull = words.slice(0, words.length)
  function open() {
    setIsOpen(!isOpen);
    setText(children);
  }

  return (
    <div>{isOpen ? <Show c={cfull} func={open} show={showLess} color={color} /> : <Show c={c} func={open} show={"..." + showMore} color={color} />}</div>
  );
}




function Show({ c, func, show, color }) {
  return (
    <div className="box" >
      <p>{c.map((k) => k + " ")}   <span style={{ color: `${color}`, cursor: "pointer" }} onClick={func}>{show}</span></p>
    </div>
  );
}
