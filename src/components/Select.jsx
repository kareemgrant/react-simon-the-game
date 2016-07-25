import React, { Component } from 'react';

const propTypes = {
  handleSelect: React.PropTypes.func.isRequired,
  selectOptions: React.PropTypes.array.isRequired,
  selectedOption: React.PropTypes.object,
  isDisabled: React.PropTypes.bool,
};

class Select extends Component {
  handleLevelSelect(e) {
    const id = e.target.value;
    this.props.handleSelect(id);
  }

  renderOptions() {
    const { selectOptions } = this.props;
    return _.map(selectOptions, (option, index) => <option key={index} value={option.id}>{option.name}</option>);
  }

  render() {
    const { selectOptions, selectedOption, isDisabled } = this.props;
    const optionValue = _.isNull(selectedOption) ? selectOptions[0].id : selectedOption.id;

    const disabledFlag = isDisabled ? 'disabled' : '';

    return (
      <div className="">
        <select
          onChange={(e) => this.handleLevelSelect(e)}
          className="form-group__select"
          value={optionValue}
          disabled={disabledFlag}
        >
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

Select.propTypes = propTypes;
module.exports = Select;
