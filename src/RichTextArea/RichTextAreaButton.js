import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from '../Tooltip';
import TextAreaBold from './../../new-icons/system/TextAreaBold';
import TextAreaItalic from './../../new-icons/system/TextAreaItalic';
import TextAreaUnderline from './../../new-icons/system/TextAreaUnderline';
import TextAreaBulletList from './../../new-icons/system/TextAreaBulletList';
import TextAreaNumberedList from './../../new-icons/system/TextAreaNumberedList';
import Link from './../../new-icons/Link';
import Image from './../../new-icons/Image';
import styles from './RichTextAreaButton.scss';
import {withFocusable, focusableStates} from '../common/Focusable';
const buttons = {
  bold: {
    icon: TextAreaBold,
    tooltipText: 'Bold',
    size: 30
  },
  italic: {
    icon: TextAreaItalic,
    tooltipText: 'Italic',
    size: 30
  },
  underline: {
    icon: TextAreaUnderline,
    tooltipText: 'Underline',
    size: 30
  },
  'unordered-list': {
    icon: TextAreaBulletList,
    tooltipText: 'Bulletted list',
    size: 30
  },
  'ordered-list': {
    icon: TextAreaNumberedList,
    tooltipText: 'Numbered list',
    size: 30
  },
  link: {
    icon: Link,
    tooltipText: 'Link',
    size: 30
  },
  image: {
    icon: Image,
    tooltipText: 'Image',
    size: 14
  }
};

class RichTextAreaButton extends Component {

  handleMouseDown = event => {
    event.preventDefault();
    if (!this.props.disabled) {
      this.props.onClick();
    }
  };

  render() {
    const {type, isActive, isTooltipDisabled, disabled} = this.props;
    const tooltipContent = <p className={styles.tooltipContent}>{buttons[type].tooltipText}</p>;
    const className = classNames(styles.button, {
      [styles.isActive]: isActive,
      [styles.disabled]: disabled
    });
    return (
      <Tooltip
        appendToParent
        content={tooltipContent}
        overlay=""
        theme="dark"
        alignment="center"
        moveBy={{x: 2, y: 2}}
        hideDelay={0}
        disabled={isTooltipDisabled}
        >
        <button
          type="button"
          className={className}
          data-hook={`rich-text-area-button-${type}`}
          {...focusableStates(this.props)}
          onFocus={this.props.focusableOnFocus} // eslint-disable-line react/prop-types
          onBlur={this.props.focusableOnBlur} // eslint-disable-line react/prop-types
          onMouseDown={this.handleMouseDown}
          >
          <span className={styles.wrapper}>
            {this.renderIcon()}
          </span>
        </button>
      </Tooltip>
    );
  }

  renderIcon() {
    const {icon: Icon, size} = buttons[this.props.type];
    return <Icon size={`${size}px`}/>;
  }

}

RichTextAreaButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  isTooltipDisabled: PropTypes.bool,
  disabled: PropTypes.bool
};

export default withFocusable(RichTextAreaButton);
