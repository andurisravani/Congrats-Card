const element = (
  // Write your code here.

  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        />
      </div>
      <div>
        <p className="head">Kiran V</p>
        <p className="para">
          Vishnu Institute of Computer Education and Technology, <br />
          Bhimavaram
        </p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
