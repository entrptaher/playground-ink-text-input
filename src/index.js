import React from "react";
import { render, Box } from "ink";
import TextInput from "ink-text-input";

const InputField = ({
  name,
  details,
  currentValue,
  handleChange,
  handleSubmit
}) => {
  return (
    <Box>
      <Box marginRight={1}>What is your {details}?: </Box>
      <TextInput
        value={currentValue}
        showCursor={true}
        onChange={handleChange}
        onSubmit={value => handleSubmit(name, value)}
      />
    </Box>
  );
};

class SearchQuery extends React.Component {
  constructor() {
    super();

    this.state = {
      currentValue: "",
      firstName: "",
      lastName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({ currentValue: value });
  }

  handleSubmit(key, value) {
    this.setState({ [key]: value, currentValue: "" });
  }

  render() {
    const { firstName, lastName, currentValue } = this.state;

    const options = {
      currentValue,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };

    if (!firstName) {
      return <InputField name="firstName" details="First Name" {...options} />;
    }
    if (!lastName) {
      return <InputField name="lastName" details="Last Name" {...options} />;
    }

    return (
      <Box marginRight={1}>
        Your full name is {firstName} {lastName}
      </Box>
    );
  }
}

render(<SearchQuery />);
