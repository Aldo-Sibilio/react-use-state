function LanguageCard({ language }) {
  return (
    <div className="card" style={{ maxWidth: "700px" }}>
      <div className="card-body">
        <h2 className="card-title">{language.title}</h2>
        <p className="card-text text-muted">{language.description}</p>
      </div>
    </div>
  );
}

export default LanguageCard;