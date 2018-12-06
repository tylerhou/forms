import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Button, Span } from "./styles";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";

const background = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6fc9d727accaab5052cd754f634e768&auto=format&fit=crop&w=1651&q=80')"
};
const letterStyle = {
  margin: 50,
  display: "inline-block",
  fontFamily: "sans-serif",
  fontSize: 25,
  color: "#FFFFFF",
  textAlign: "left"
};
const buttonstyle = {
  padding: 50
};

class FormsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      wasMarried: false,
      hasBeenThreatened: false,
      inSameAreaAsCourt: false
    };
    // set this, because you need get methods from CheckBox
    this.handleWasMarriedChecked = this.handleWasMarriedChecked.bind(this);
    this.handleHasBeenThreatenedChecked = this.handleHasBeenThreatenedChecked.bind(
      this
    );
    this.handleSameAreaChecked = this.handleSameAreaChecked.bind(this);
  }
  handleWasMarriedChecked(e) {
    this.setState({ wasMarried: e.target.checked });
  }

  handleHasBeenThreatenedChecked(e) {
    this.setState({ hasBeenThreatened: e.target.checked });
  }

  handleSameAreaChecked(e) {
    this.setState({ inSameAreaAsCourt: e.target.checked });
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.wasMarried &&
      this.state.hasBeenThreatened &&
      this.state.inSameAreaAsCourt
    ) {
      this.props.history.push("/defendant");
    } else {
      alert(
        "Unfortunately, you are not eligible for a plaintiff form.Please click non-eligible to access other resources"
      );
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={background}>
        <div style={letterStyle}>
          <h2>Protective Order Elgibility Confirmation</h2>
          <h3>{this.props.title}</h3>
          <table>
            <td>
              <p>
                Were you and your abuser married, residing together, in a
                substantive dating or engagement relationship, related by blood
                or marriage, or have a child in common?
              </p>
              <input
                type="checkbox"
                class="checkbox"
                name="q1"
                checked={this.state.wasMarried}
                onChange={this.handleWasMarriedChecked}
              />
              <p>
                Are you suffering from abuse because your abuser has harmed or
                attempted to harm you physically, or put you in fear of imminent
                serious physical harm, or caused you to engage in sexual
                relations involuntarily by using force, threat or duress?
              </p>
              <input
                type="checkbox"
                class="checkbox"
                name="q2"
                checked={this.state.hasBeenThreatened}
                onChange={this.handleHasBeenThreatenedChecked}
              />
              <p>
                Are you currently living within the geographical area of this
                court, or used to live within the geographical area of this
                court but you left to avoid abuse?{" "}
              </p>
              <input
                type="checkbox"
                class="checkbox"
                name="q3"
                checked={this.state.inSameAreaAsCourt}
                onChange={this.handleSameAreaChecked}
              />
            </td>
          </table>
        </div>
        <div style={buttonstyle}>
          <Button className="btn btn-default" type="submit">
            Check
          </Button>
          <Link to="/list">
            <Button> I am eligible</Button>
          </Link>
          <Link to="/">
            <Button>I am not eligible</Button>
          </Link>
        </div>
      </form>
    );
  }
}
export default withRouter(FormsPage);
