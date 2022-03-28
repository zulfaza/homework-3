import { Component } from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import getQueryParams from "./utils/getQueryParams";

class App extends Component {
  state = {
    accessToken:
      '"BQAlMuR-wjEQ0STDnRPO5vL_Z34mKtMuIY-VnjY5Z4e18kjPMCUP0ZUso5N3Yl8-zglDFMII1n1sG75nc16DhJWcOia1YYhJ_6Cm_de5Z6hLEZJI6LlO4Gjc7JDFzK0oEyF5GDdgV1RyERVUq2sEWQ19zQiuSUfYTRsXilcGx-5mYgiGGOQ8WZtPyfQFRJw"',
  };

  componentDidMount() {
    const { access_token = null } = getQueryParams(window.location.hash);
    if (access_token) this.setState({ accessToken: access_token });
  }

  render() {
    const { accessToken = null } = this.state;
    if (accessToken)
      return (
        <div className="App">
          <Home accessToken={accessToken} />
        </div>
      );

    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
