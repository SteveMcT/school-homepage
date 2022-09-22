import Header from "../header/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="App-Main">
        <div className="App-Main-Content">
          <h1>HTBLA Kaindorf</h1>
          <p>Unsere Ziele erreichen wir durch Offenheit, sowie Ehrlichkeit im Umgang miteinander. Ebenso wird Toleranz und gegenseitige Wertschätzung für gesellschaftliche, persönliche und fachliche Entwicklung gefördert. Eine positive Atmosphäre beeinflusst das Zusammenleben von Schülerinnen und Schülern, Lehrerinnen und Lehrern, Eltern, Schulleitung, Schulpersonal und Wirtschaft.</p>

          <p style={{ marginTop: "2rem" }}>
            In unserer Schule streben wir auf konstruktive Kommunikation zwischen Lehrern <br />
            und Schülern, sowie auf laufendes Feedback für einen effektiven, und permanenten <br />
            Lernprogress.
          </p>
        </div>

        <img src="src/assets/htl-3d.png" alt="" />
      </main>
    </div>
  );
}

export default App;
