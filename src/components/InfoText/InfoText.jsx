import "./InfoText.css";

function InfoText({ textKey, textData }) {
  if (textKey == "origin" || textKey == "location") {
    const parsedData = JSON.parse(textData);
    // console.log(textData);
    textData = parsedData.name;
    // console.log(textData);
    return (
      <p className="info-text">
        <span className="info-text__subtext">{`${textKey}: `}</span>
        <a
          className="info-text__url"
          href={`${parsedData.url}`}
          target="_blank"
        >
          {textData}
        </a>
      </p>
    );
  }

  return (
    <p className="info-text">
      <span className="info-text__subtext">{`${textKey}: `}</span>
      {textData == "" ? "N/A" : textData}
    </p>
  );
}

export default InfoText;