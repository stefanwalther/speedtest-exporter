# speedtest-exporter

> Prometheus exporter for speedtest-net created with node.js.

## Usage

Running the container:

```sh
$ docker run \
    -p 9696:9696 \
    stefanwalther/speedtest-exporter
```

## Metrics

The exporter exposes the following metrics:

| Name                                                   | Description                                                     |  Type |
|:-------------------------------------------------------|:----------------------------------------------------------------|:-----:|
| `speedtest_bits_per_seconds(direction="downstream")`   | Downstream speed in bits/sec, based on the speedtest.net tests. | gauge |
| `speedtest_bits_per_seconds(direction="upstream")`     | Upstream speed in bits/sec, based on the speedtest.net tests.   | gauge |
| `speedtest_ping`                                       | Ping in ms.                                                     | gauge |

Random scrape result:

```sh
# TYPE speedtest_bits_per_second gauge
# HELP speedtest_bits_per_second Speed measured against speedtest.net
speedtest_bits_per_second{direction="downstream"} 117.949
speedtest_bits_per_second{direction="upstream"} 26.472
# TYPE speedtest_ping gauge
# HELP speedtest_ping Ping in ms
speedtest_ping 22.6
```

## About

### Author
**Stefan Walther**

* [github/stefanwalther](https://github.com/stefanwalther)
* [twitter/waltherstefan](http://twitter.com/waltherstefan)

### License
MIT


