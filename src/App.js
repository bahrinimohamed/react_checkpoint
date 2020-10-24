import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <input className="form-control" />
      <div class="form-group">
        <label for="usr">Name:</label>
        <input type="text" class="form-control" id="usr" />
      </div>
      <div className="container">
        <form action="/action_page.php">
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
      <input type="checkbox" name="remember" />
      <br />
      <label>
        <input type="checkbox" value="" />
        Option 1
      </label>
      <br />
      <label>
        <input type="checkbox" value="" />
        Option 2
      </label>
    </div>
  );
}
