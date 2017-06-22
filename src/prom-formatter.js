
function format(results) {
  let output = '';
  const lb = '\n';

  output += `# TYPE speedtest_bits_per_second gauge${lb}`;
  output += `# HELP speedtest_bits_per_second Speed measured against speedtest.net${lb}`;
  output += `speedtest_bits_per_second{direction="downstream"} ${results.speeds.download}${lb}`;
  output += `speedtest_bits_per_second{direction="upstream"} ${results.speeds.upload}${lb}`;

  return output;
}

module.exports = {
  format
};
