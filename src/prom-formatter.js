
function format(results) {
  let output = '';
  const lb = '\n';

  output += `# TYPE speedtest_bits_per_second gauge${lb}`;
  output += `# HELP speedtest_bits_per_second Speed measured against speedtest.net${lb}`;
  output += `speedtest_bits_per_second{direction="downstream"} ${results.speeds.download}${lb}`;
  output += `speedtest_bits_per_second{direction="upstream"} ${results.speeds.upload}${lb}`;

  output += `# TYPE speedtest_ping gauge${lb}`;
  output += `# HELP speedtest_ping Ping in ms${lb}`;
  output += `speedtest_ping ${results.server.ping}${lb}`;

  return output;
}

module.exports = {
  format
};
