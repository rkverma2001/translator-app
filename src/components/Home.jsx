import { useState } from "react";
import axios from "axios";
import InputLan from "./InputLan";
import OutputLan from "./OutputLan";
import './Home.css'

function Home() {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("hi");

  async function getTranslatedData() {
    try {
      // to convert from string to encoded format we use URLSearchParams
      const encodeData = new URLSearchParams();
      // append the data with key and value
      encodeData.append("source_language", sourceLanguage);
      encodeData.append("target_language", targetLanguage);
      encodeData.append("text", data);

      const option = {
        method: "post",
        url: "https://text-translator2.p.rapidapi.com/translate",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "30a3f8468amshde824a79dd59605p147ccajsn96a6dee283fe",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
        data: encodeData, // payload // request body
      };
      const res = await axios.request(option);
      setResult(res.data.data.translatedText);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
        <div className="title">Translator App</div>
      <InputLan
        value={sourceLanguage}
        onChange={(e) => setSourceLanguage(e.target.value)}
      />
      <br />
      <OutputLan
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      />
      <br />
      <textarea
        name="data"
        placeholder="Enter data here"
        onChange={(e) => setData(e.target.value)}
        rows={4}
      />

      <br />
      <button onClick={getTranslatedData}>Translate</button>
      <br />
      <p className="out-col">{result}</p>
    </div>
  );
}

export default Home;
