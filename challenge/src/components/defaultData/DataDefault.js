export default [
    {
      id: "japan",
      color: "hsl(194, 70%, 50%)",
      data: [
        {
          x: "0",
          y: 1.3
        },
        {
          x: "1",
          y: 0.2
        }
      ]
    },
    {
      id: "france",
      color: "hsl(115, 70%, 50%)",
      data: [
        {
          x: "0",
          y: 1
        },
        {
          x: "1",
          y: 1.3
        }
      ]
    },
    {
      id: "us",
      color: "hsl(354, 70%, 50%)",
      data: [
        {
          x: "0",
          y: 1
        },
        {
          x: "1",
          y: 0.4
        }
      ]
    },
    {
      id: "germany",
      color: "hsl(145, 70%, 50%)",
      data: [
        {
          x: "0",
          y: 1.2
        },
        {
          x: "1",
          y: 2.9
        }
      ]
    },
    {
      id: "norway",
      color: "hsl(97, 70%, 50%)",
      data: [
        {
          x: "0",
          y: 0.1
        },
        {
          x: "1",
          y: 1
        }
      ]
    }
  ];

  export const datas=[
    {type: "start", timestamp: 1519862400000, select: ["min_response_time","max_response_time"], group: ["os","browser"]},
    {type: "span", timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000},
    {type: "data", timestamp: 1519862400000, os: "linux", browser: "chrome", min_response_time: 0.1, max_response_time: 1.3},
    {type: "data", timestamp: 1519862400000, os: "mac", browser: "chrome", min_response_time: 0.2, max_response_time: 1.2},
    {type: "data", timestamp: 1519862400000, os: "mac", browser: "firefox", min_response_time: 0.3, max_response_time: 1.2},
    {type: "data", timestamp: 1519862400000, os: "linux", browser: "firefox", min_response_time: 0.1, max_response_time: 1.0},
    {type: "data", timestamp: 1519862460000, os: "linux", browser: "chrome", min_response_time: 0.2, max_response_time: 0.9},
    {type: "data", timestamp: 1519862460000, os: "mac", browser: "chrome", min_response_time: 0.1, max_response_time: 1.1},
    {type: "stop", timestamp: 1519862460000}
]


