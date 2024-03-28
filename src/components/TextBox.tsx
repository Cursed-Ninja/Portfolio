import { useEffect, useState } from "react";

const data = ["Shivam Mahajan", "a Competitive Programmer", "a Web Developer"];

const TextBox = () => {
  const [text, setText] = useState("");
  const [textData, setTextData] = useState({
    arrayIndex: 0,
    typing: true,
    text: "",
    stringIndex: 0,
  });

  useEffect(() => {
    const changeText = () => {
      if (textData.typing) {
        const char = data[textData.arrayIndex].charAt(textData.stringIndex);
        setText(textData.text.concat(char));
        setTextData((prevTextData) => ({
          ...prevTextData,
          text: prevTextData.text.concat(char),
          stringIndex: prevTextData.stringIndex + 1,
          typing:
            prevTextData.stringIndex === data[prevTextData.arrayIndex].length
              ? false
              : true,
        }));
      } else {
        const str = textData.text.slice(0, -1);
        setText(str);
        setTextData((prevTextData) => ({
          ...prevTextData,
          text: str,
          stringIndex:
            prevTextData.stringIndex === 0
              ? prevTextData.stringIndex
              : prevTextData.stringIndex - 1,
          typing: prevTextData.stringIndex === 0 ? true : false,
          arrayIndex:
            prevTextData.stringIndex === 0
              ? (prevTextData.arrayIndex + 1) % data.length
              : prevTextData.arrayIndex,
        }));
      }
    };
    const timeOutId = setTimeout(changeText, 200);
    return () => clearTimeout(timeOutId);
  }, [textData]);

  return (
    <div className="text-box">
      <pre>
        Hey I'm {text}
        <span className="cursor"></span>
      </pre>
    </div>
  );
};

export default TextBox;
