import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import isEqual from 'deep-eql';
import trim from 'lodash/trim';

import {stylable} from 'wix-react-tools';
import styles from './DropdownLayout.st.css';

const modulu = (n, m) => {
  const remain = n % m;
  return remain >= 0 ? remain : remain + m;
};

const NOT_HOVERED_INDEX = -1;

@stylable(styles)
export default class DropdownLayout extends WixComponent {

  static propTypes = {
    dropDirectionUp: PropTypes.bool,
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
    visible: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      value: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
      ]).isRequired,
      disabled: PropTypes.bool,
      overrideStyle: PropTypes.bool
    })),
    selectedId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    tabIndex: PropTypes.number,
    theme: PropTypes.string,
    onClickOutside: PropTypes.func,
    fixedHeader: PropTypes.node,
    fixedFooter: PropTypes.node,
    maxHeightPixels: PropTypes.number,
    withArrow: PropTypes.bool,
    closeOnSelect: PropTypes.bool
  };

  static defaultProps = {
    options: [],
    tabIndex: 0,
    selectedId: NOT_HOVERED_INDEX,
    maxHeightPixels: 260,
    closeOnSelect: true
  };

  static NONE_SELECTED_ID = NOT_HOVERED_INDEX;

  constructor(props) {
    super(props);

    this.state = {
      hovered: NOT_HOVERED_INDEX,
      selectedId: props.selectedId
    };

    this._onSelect = this._onSelect.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClose = this._onClose.bind(this);
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  isLegalOption(option) {
    return typeof option === 'object' && typeof option.id !== 'undefined' && trim(option.id).length > 0 &&
        (typeof option.value !== 'undefined') && (React.isValidElement(option.value) || (typeof option.value === 'string' && trim(option.value).length > 0));
  }

  onClickOutside(event) {
    const {visible, onClickOutside} = this.props;
    if (visible && onClickOutside) {
      onClickOutside(event);
    }
  }

  _onSelect(index) {
    const {options, onSelect, selectedId} = this.props;
    this.setState({selectedId: options[index] ? options[index].id : undefined});
    options[index] && onSelect && onSelect(options[index], options[index].id === selectedId);
    return !!onSelect && options[index];
  }

  _onMouseEnter(index) {
    if (this.isSelectableOption(this.props.options[index])) {
      this.setState({hovered: index});
    }
  }

  _onMouseLeave() {
    this.setState({
      hovered: NOT_HOVERED_INDEX
    });
  }

  hoverNextStep(step) {
    const {options} = this.props;

    if (!options.some(this.isSelectableOption)) {
      return;
    }

    let newHovered = this.state.hovered;
    do {
      newHovered = Math.abs(modulu(Math.max(newHovered + step, -1), options.length));
    } while (!this.isSelectableOption(options[newHovered]));

    this.setState({hovered: newHovered});
    this.options.scrollTop = (newHovered - 2) * 35;
  }

  _onKeyDown(event) {
    if (!this.props.visible || this.props.isComposing) {
      return false;
    }

    switch (event.key) {
      case 'ArrowDown': {
        this.hoverNextStep(1);
        break;
      }

      case 'ArrowUp': {
        this.hoverNextStep(-1);
        break;
      }

      case 'Enter': {
        if (!this._onSelect(this.state.hovered)) {
          return false;
        }
        break;
      }

      case 'Tab': {
        if (this.props.closeOnSelect) {
          return this._onSelect(this.state.hovered);
        } else {
          event.preventDefault();
          if (!this._onSelect(this.state.hovered)) {
            return false;
          }
        }
        break;
      }

      case 'Escape': {
        this._onClose();
        break;
      }

      default: {
        return false;
      }
    }

    event.preventDefault();
    event.stopPropagation();
    return true;
  }

  _onClose() {
    this.setState({
      hovered: NOT_HOVERED_INDEX,
    });

    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  renderNode(node) {
    return node ? <div className="node">{node}</div> : null;
  }

  render() {
    const {options, visible, dropDirectionUp, tabIndex, fixedHeader, fixedFooter, withArrow} = this.props;

    return (
      <div tabIndex={tabIndex} className={this.props.theme ? `theme-${this.props.theme}` : ''} onKeyDown={this._onKeyDown}>
        <div
          style-state={{shown: visible, up: dropDirectionUp, down: !dropDirectionUp, withArrow}}
          className="content-container"
          style={{maxHeight: this.props.maxHeightPixels + 'px'}}
          >
          {this.renderNode(fixedHeader)}
          <div className="options" style={{maxHeight: this.props.maxHeightPixels - 35 + 'px'}} ref={options => this.options = options} data-hook="dropdown-layout-options">
            {options.map((option, idx) => (
              option.value === '-' ?
                (this.renderDivider(idx, `dropdown-item-${option.id}`)) :
                (this.renderItem({
                  option,
                  idx,
                  selected: option.id === this.state.selectedId,
                  hovered: idx === this.state.hovered,
                  disabled: option.disabled || option.title,
                  title: option.title,
                  overrideStyle: option.overrideStyle,
                  dataHook: `dropdown-item-${option.id}`
                }))
            ))}
          </div>
          {this.renderNode(fixedFooter)}
        </div>
        {this.renderTopArrow()}
      </div>
    );
  }

  renderDivider(idx, dataHook) {
    return (<div key={idx} className="divider" data-hook={dataHook}/>);
  }

  renderItem({option, idx, selected, hovered, disabled, title, overrideStyle, dataHook}) {
    let optionClassName = 'option';
    if (overrideStyle) {
      optionClassName = 'overrideOption';
      if (selected) {
        optionClassName += ' wixstylereactSelected'; //global class for items that use the overrideStyle
      }
      if (hovered) {
        optionClassName += ' wixstylereactHovered'; //global class for items that use the overrideStyle
      }
    }
    return (
      <div
        style-state={{selected, hovered, disabled, title}}
        className={optionClassName}
        onClick={!disabled ? () => this._onSelect(idx) : null}
        key={idx}
        onMouseEnter={() => this._onMouseEnter(idx)}
        onMouseLeave={this._onMouseLeave}
        data-hook={dataHook}
        >
        {option.value}
      </div>
    );
  }

  renderTopArrow() {
    const {withArrow, visible, dropDirectionUp} = this.props;
    return withArrow && visible ? <div style-state={{up: dropDirectionUp, down: !dropDirectionUp}} className="arrow"/> : null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      if (nextProps.visible) {
        this.setState({hovered: this.props.options.findIndex(item => item.id === this.state.selectedId) || NOT_HOVERED_INDEX});
      } else {
        this.setState({hovered: NOT_HOVERED_INDEX});
      }
    }

    if (this.props.selectedId !== nextProps.selectedId) {
      this.setState({selectedId: nextProps.selectedId});
    }

    if (!isEqual(this.props.options, nextProps.options)) {
      if (nextProps.options.some(option => (!this.isLegalOption(option)))) {
        throw new Error('InputWithOptions: Invalid option provided');
      }

      if (this.state.hovered !== NOT_HOVERED_INDEX) {
        this.setState({
          hovered: nextProps.options.findIndex(item => item.id === this.props.options[this.state.hovered].id)
        });
      }
    }
  }

  isSelectableOption(option) {
    return option.value !== '-' && !option.disabled && !option.title;
  }
}
