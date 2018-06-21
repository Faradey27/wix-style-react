import React, {Component} from 'react';
import {Tooltip, Button} from 'wix-style-react';

export const SHORT_CONTENT = 'Hello World';
export const LONG_CONTENT = 'Hello World, Hello World, Hello World, Hello World';

export default class TooltipForEyesOnly extends Component {
  static displayName = 'TooltipForEyesOnly';

  static propTypes = {};

  static defaultProps = {};

  constructor() {
    super();
    this.state = {
      content: SHORT_CONTENT,
      style: {}
    };
  }

  render() {
    const {style, content} = this.state;
    const isE2e = global.self === global.top;

    return isE2e ? (
      <div data-hook="tooltip-e2e-wrapper">
        <Tooltip
          active
          shouldUpdatePosition
          showImmediately
          showTrigger={'custom'}
          hideTrigger={'custom'}
          appendToParent
          content={<div data-hook="tooltip-e2e-tooltip">{content}</div>}
          >
          <div style={style}>My Father is a Tooltip</div>
        </Tooltip>
        <Button onClick={() => this._onClick()}>Change State</Button>
      </div>
    ) : null;
  }

  _onClick() {
    this.setState({
      style: {position: 'relative', left: '20px'},
      content: LONG_CONTENT
    });
  }
}
