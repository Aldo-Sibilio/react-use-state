import { useState } from "react";
import languages from "./languages";
import LanguageCard from "./components/LanguageCard";

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Learn Web Development</h1>

      {/* bottoni */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {languages.map((language) => (
          <button
            key={language.id}
            className={selectedLanguage.id === language.id ? "btn btn-warning" : "btn btn-primary"}
            onClick={() => setSelectedLanguage(language)}
          >
            {language.title}
          </button>
        ))}
      </div>

      {/* card del linguaggio selezionato */}
      <LanguageCard language={selectedLanguage} />
    </div>
  );
}

export default App;