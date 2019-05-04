import React from 'react';
import { Button } from 'semantic-ui-react';

/**
 * Just a test component to demonstrate wrapped componenets
 */
class TestButton extends React.Component {

  render() {
    return (<Button {...this.props} >Test!</Button>);
  }
}

export { TestButton as default };
