'use strict';
const React = require('react');
const {Text, Box} = require('ink');
const {loremIpsum} = require('lorem-ipsum');

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

const App = ({height = 25}) => (
	<Box width={80} height={height}>
        <Box width={80}>
          <Paragraphs count={100} />
        </Box>
    </Box>
);

module.exports = App;
