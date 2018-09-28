import React from "react";
import { Panel, Col } from "react-bootstrap";

class IndexPanel extends React.Component {
  static defaultProps = {
    bsStyle: "info",
    children: <span />
  };

  render() {
    return (
      <Col sm={6}>
        <Panel {...this.props} />
      </Col>
    );
  }
}

export default IndexPanel;
