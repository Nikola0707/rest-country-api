import "./Country.style.css";

const Country = () => {
  return (
    <div className="contry-container">
      <div className="country-img-wrapper">
        <img src="https://i.imgur.com/LSO8EjB.png" alt="country" />
      </div>
      <div className="country-info">
        <p className="country-name">Germany</p>
        <div className="population-region-capital-wrapper">
          <p>
            Population: <span>81.770.990</span>
          </p>
          <p>
            Region: <span>Europe</span>
          </p>
          <p>
            Capital: <span>Berlin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
