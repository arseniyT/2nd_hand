import React, { Component } from "react";

interface ISelectFieldProps {
  id: string;
  name: string;
  label: string;
  items: string[];
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

class SelectField extends Component<ISelectFieldProps> {
  public render() {
    const { id, name, label, items, disabled } = this.props;

    return (
      <div className="custom-select">
        <label htmlFor={id}>{label}: </label>
        <select id={id} name={name} disabled={disabled} onChange={this.props.onChange}>
          <option key={id} value="">---</option>
          {items.length && items.map((item: string) => (
            <option
              key={item}
              value={item}
            >{item}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default SelectField;
