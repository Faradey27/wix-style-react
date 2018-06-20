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
      disabledButtonWithTooltip: false,
      style: {}
    };
    // small trick to allow to update state of component from e2e test
    window.setComponentState = state => this.setState(state);
  }

  renderTooltip() {
    return [
      <Tooltip
        active
        key="tooltip"
        shouldUpdatePosition
        showImmediately
        showTrigger={'custom'}
        hideTrigger={'custom'}
        appendToParent
        content={<div data-hook="tooltip-e2e-tooltip">{this.state.content}</div>}
        >
        <div style={this.state.style}>My Father is a Tooltip</div>
      </Tooltip>,
      <Button key="button" onClick={() => this._onClick()}>Change State</Button>
    ];
  }

  renderDisabledButtonWithTooltip() {
    return (
      <Tooltip
        shouldUpdatePosition
        showImmediately
        appendToParent
        content="Some tooltip"
        >
        <Button
          dataHook="disabled-button"
          disabled
          type="button"
          >
          Hover Me
        </Button>
      </Tooltip>
    );
  }

  render() {
    const isE2e = global.self === global.top;

    return isE2e ? (
      <div data-hook="tooltip-e2e-wrapper">
        {
          this.state.disabledButtonWithTooltip ? this.renderDisabledButtonWithTooltip() : this.renderTooltip()
        }
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
