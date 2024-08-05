import React, { useState } from "react";
import mammoth from "mammoth";

function App() {
  const [content, setContent] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      mammoth
        .convertToHtml({ arrayBuffer: event.target.result })
        .then((result) => setContent(result.value))
        .catch((err) => console.error(err));
    };

    reader.readAsArrayBuffer(file);
  };

  const handleIconClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div>
      <div
        className="icon"
        onClick={handleIconClick}
        style={{ cursor: "pointer", fontSize: "24px" }}
      >
        📄 Загрузить файл
      </div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default App;
