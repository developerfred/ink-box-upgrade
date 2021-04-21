'use strict';
const React = require('react');
const {Text, Box} = require('ink');
const {loremIpsum} = require('lorem-ipsum');
const useWindowSize = require('./hooks/useWindowSize');

const Paragraphs = ({ count = 10 }) => {
  const raw = loremIpsum({
    units: "paragraphs",
    count
  });
	const text = raw.split("\n").join("\n\n");

  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  )
}

const App = ({}) => {
	const size = useWindowSize()
		return (
			<Box width={80} height={size.height}>
        <Box width={80}>
          <Paragraphs count={20000} />
        </Box>
		  </Box>
		)
}

module.exports = App;
