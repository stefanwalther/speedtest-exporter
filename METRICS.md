# Metrics

Below are an example of the metrics as exposed by this exporter. 

```
# TYPE speedtest_bits_per_second gauge
# HELP speedtest_bits_per_second Speed measured against speedtest.net
speedtest_bits_per_second{direction="downstream"} 117.949
speedtest_bits_per_second{direction="upstream"} 26.472
# TYPE speedtest_ping gauge
# HELP speedtest_ping Ping in ms
speedtest_ping 22.6
```
