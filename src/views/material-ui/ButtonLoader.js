import React from 'react';
import { Button } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import * as Colors from '@material-ui/core/colors';
import Spinner from 'react-loader';

class ButtonLoader extends React.Component {
  
  static defaultProps = {
    icon: Favorite,
    loading: false,
    spinConfig: {
      lines: 10,
      length: 4,
      width: 2,
      radius: 3,
    },
    spinColorDark: Colors.darkBlack,
    spinColorLight: Colors.darkWhite,
    spinColorDisabled: Colors.minBlack,
    children: <span>Submit</span>,
    style: {}
  };

  handleClick(ev) {
    ev.preventDefault();
    this.props.onClick(ev);
  }

  getColor() {
    if (this.props.disabled) {
      return this.props.spinColorDisabled;
    } else if (this.props.primary || this.props.secondary) {
      return this.props.spinColorLight;
    } else {
      return this.props.spinColorDark;
    }
  }

  renderIcon() {
    let icon,
      color = this.getColor();

    if (this.props.loading) {
      icon = (
        <div style={{ position: "absolute", top: 15, left: 7 }}>
          <Spinner
            ref="spinner"
            {...this.props.spinConfig}
            color={color}
            loaded={false} />
        </div>
      );
    } else {
      if (typeof (this.props.icon) === "object") {
        icon = this.props.icon;
      } else {
        icon = <this.props.icon color={color} style={{ width: 15, height: 15 }} />;
      }
    }

    return (
      <span style={{
        width: 15,
        height: 15,
        position: "absolute",
        left: 10,
        top: 3
      }}>
        {icon}
      </span>
    );
  }

  render() {
    let color = this.getColor();

    const props = {
      children: this.props.children,
      className: this.props.className,
      disabled: this.props.disabled || this.props.loading,
      fullWidth: this.props.fullWidth,
      href: this.props.href,
      label: this.props.label || <span style={{ paddingLeft: 15, color }}>{this.props.children}</span>,
      labelPosition: this.props.labelPosition || "after",
      secondary: this.props.secondary,
      style: this.props.style,
      type: this.props.type
    };

    return (
        <Button
          {...props}
          onClick={this.handleClick.bind(this)}>
          {this.renderIcon()}
        </Button>
    );
  }
}

export default ButtonLoader;
