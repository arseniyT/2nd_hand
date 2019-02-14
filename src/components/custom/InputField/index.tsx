import React, { Component } from "react";

interface IInputFieldProps {
  label: string;
  id: string;
  type: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class InputField extends Component<IInputFieldProps> {
  public render() {
    const { id, type, name, label } = this.props;

    return (
      <div className="custom-input">
        <label htmlFor={id}>{label}: </label>
        <input id={id} type={type} name={name} placeholder={label} onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default InputField;
