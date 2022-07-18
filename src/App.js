import "./App.scss";

function App() {
  return (
    <main className="App">
      <section className="App-section">
        <div className="App-section--box">
          <div className="wrapper">
            <h1>
              Get <span>insights</span> that help your business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <footer className="footer">
              <h2 className="footer--content">
                10k+ <span>companies</span>
              </h2>
              <h2 className="footer--content">
                314 <span>templates</span>
              </h2>
              <h2 className="footer--content">
                12m+ <span>queries</span>
              </h2>
            </footer>
          </div>
        </div>
        <div className="App-section--box">&nbsp;</div>
      </section>
    </main>
  );
}

export default App;
