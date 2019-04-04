import React from 'react';
import Button from '@material-ui/core/Button';

class ButtonLoader extends React.Component {
  handleClick(ev) {
    ev.preventDefault();
    this.props.onClick(ev);
  }

  // getColor() {
  //   if (this.props.disabled) {
  //     return this.props.spinColorDisabled;
  //   } else if (this.props.primary || this.props.secondary) {
  //     return this.props.spinColorLight;
  //   } else {
  //     return this.props.spinColorDark;
  //   }
  // }

  // renderIcon() {
  //   let icon,
  //     color = this.getColor();

  //   if (this.props.loading) {
  //     icon = (
  //       <div style={{ position: "absolute", top: 15, left: 7 }}>
  //         <Spinner
  //           ref="spinner"
  //           {...this.props.spinConfig}
  //           color={color}
  //           loaded={false} />
  //       </div>
  //     );
  //   } else {
  //     if (typeof (this.props.icon) === "object") {
  //       icon = this.props.icon;
  //     } else {
  //       icon = <this.props.icon color={color} style={{ width: 15, height: 15 }} />;
  //     }
  //   }

  //   return (
  //     <span style={{
  //       width: 15,
  //       height: 15,
  //       position: "absolute",
  //       left: 10,
  //       top: 3
  //     }}>
  //       {icon}
  //     </span>
  //   );
  // }

  render() {
    const props = {
      children: this.props.children,
      className: this.props.className,
      disabled: this.props.disabled || this.props.loading,
      fullWidth: this.props.fullWidth,
      href: this.props.href,
      color: this.props.color,
      style: this.props.style,
      type: this.props.type
    };

    return (
      React.cloneElement(this.props.signOutAction, {
        onClick: this.handleClick.bind(this)
      }) ||
      <Button
        {...props}
        onClick={this.handleClick.bind(this)}
      >
        Sing Out
      </Button>
    );
  }
}

export default ButtonLoader;
