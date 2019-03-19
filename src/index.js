import React, { Component } from "react";
import { render, Box, Text, StdinContext } from "ink";
import TextInput from "ink-text-input";

import Dummy from "../scraper/dummy";
import validUrl from "../scraper/utils/valid-url";
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
    url: {
      value: "",
      submitted: false,
      loaded: false,
      error: false,
      counter: 0
    },
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
    // confirm if url is valid
    if (!validUrl(url.value)) {
      url.value = "";
      url.error = true;
      url.submitted = false;
    } else {
      url.error = false;
      url.submitted = true;
    }
    this.setState({ url });

    // ask the api to navigate to url

    // we show a timer to have interactivity and
    // set dummy timer otherwise the cli will exit
    let count = 1;
    const timer = setInterval(() => {
      url.counter = count;
      this.setState({ url });
      count += 1;

      if (this.state.url.loaded) {
        url.counter = 0;
        this.setState({ url });
        clearInterval(timer);
      }
    }, 1000);

    // get navigation status
  };
  changeSelector = selector => {
    this.setState({ selector });
  };
  submitSelector = () => {
    // reset statusText to get fresh data
    // ask the scraper to fetch new data
    // statusText is the error or success returned from browser/querySelector
  };
  render() {
    const { currentValue, url, statusText, selector } = this.state;
    // Do not start if no url is provided and user don't initiate the navigation yet
    if (!url || !url.submitted) {
      return (
        <Box flexDirection="column">
          {url.error && <Text flex={1}>Please enter correct URL</Text>}
          <Box flex={1}>
            <Box marginRight={1}>Enter target URL: </Box>
            <TextInput
              value={url.value}
              showCursor={true}
              onChange={this.setUrl}
              onSubmit={this.setUrlStatus}
            />
          </Box>
        </Box>
      );
    }
    // once website is loaded, ask for selector
    // show result only if data and selector is available
    // ask for new selector nonetheless
    return (
      <Box flexDirection="column">
        <Text flex={1}>
          Current URL: {url.value}, {url.loaded && "Url is loaded, "} Time
          Spent: {url.counter}
        </Text>
        {statusText && selector && (
          <>
            <Text flex={1}>Last Selector: {selector}</Text>
            <Text flex={1}>Status Text: {statusText}</Text>
          </>
        )}
        {url.loaded && (
          <Box flex={1}>
            <Box marginRight={1}>Selector: </Box>
            <TextInput
              value={currentValue}
              showCursor={true}
              onChange={this.handleChange}
            />
          </Box>
        )}
      </Box>
    );
  }
}

render(<ExampleResponder />);
