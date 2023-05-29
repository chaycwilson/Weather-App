import './Output.css';


export const Output = ({area, results}) => {
    
    return (
        <div className="results-section">
      <h3>Weather Results for {area}</h3>
      <div className="results-container">
        {results.map((result, index) => (
          <div key={index} className="result-item" onClick={() => {
            console.log(result.id)
          }}>
            <p className="result-date">Date: {result.date}</p>
            <p className="result-temperature">Temperature: {result.temperature}</p>
            <p className="result-humidity">Humidity: {result.humidity}</p>
            {/* Add more relevant information here */}
          </div>
        ))}
      </div>
    </div>
    )
}

export default Output;