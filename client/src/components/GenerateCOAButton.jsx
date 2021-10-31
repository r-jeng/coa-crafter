import React from 'react';

class GenerateCOAButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div >
        <button className="generate_COA_button" onClick={this.handleClick}>Generate COA</button>
      </div>
    );
  }
}

export default GenerateCOAButton;