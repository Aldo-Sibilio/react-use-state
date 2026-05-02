import { useState } from "react";
import languages from "./languages";
import LanguageCard from "./components/LanguageCard";

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Learn Web Development</h1>