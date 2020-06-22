import React from "react";
import { slide as Menu } from "react-burger-menu";
import SideContent from "./SideContent";

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };

    this.menuClose = this.menuClose.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  menuClose() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        pageWrapId={"page-wrap"}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        left
      >
        <SideContent onCloseClick={this.menuClose} />
      </Menu>
    );
  }
}

export default MenuContent;
