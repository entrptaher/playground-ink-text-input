import React, { Component } from "react";
import { render, Box, Text } from "ink";
import TextInput from "ink-text-input";

import Dummy from "../scraper/dummy";
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

/**
 * if no url provided ask for target website
 * navigate the website
 * ask for selector
 * get status for selector
 * if no selector provided, then cleanup and exit
 */

class ExampleResponder extends Component {
  state = {
    currentValue: "",
    url: { value: "", submitted: false },
    selector: "",
    statusText: ""
  };
  handleChange = value => {
    this.setState({ currentValue: value });
  };
  setUrl = value => {
    const { url } = this.state;
    url.submitted = false;
    url.value = value;
    this.setState({ url });
  };
  setUrlStatus = () => {
    const { url } = this.state;
    url.submitted = true;
    this.setState({ url });
  };
  render() {
    const { currentValue, url, statusText, selector } = this.state;
    // Do not start if no url is provided and user don't initiate the navigation yet
    if (!url || !url.submitted) {
      return (
        <Box>
          <Box marginRight={1}>Enter target URL: </Box>
          <TextInput
            value={url.value}
            showCursor={true}
            onChange={this.setUrl}
            onSubmit={this.setUrlStatus}
          />
        </Box>
      );
    }
    // once website is loaded, ask for selector
    // show result only if data and selector is available
    // ask for new selector nonetheless
    return (
      <Box flexDirection="column">
        <Text flex={1}>Current URL: {url.value}</Text>
        {statusText && selector && (
          <Text flex={1}>
            Last Selector: {selector} and Content: {statusText}
          </Text>
        )}
        <Box flex={1}>
          <Box marginRight={1}>Selector: </Box>
          <TextInput
            value={currentValue}
            showCursor={true}
            onChange={this.handleChange}
          />
        </Box>
      </Box>
    );
  }
}

class SearchQuery extends Component {
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

render(<ExampleResponder />);
