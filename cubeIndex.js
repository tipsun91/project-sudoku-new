function cubeIndex(x, y) {
  const cc = {
    1: { // 0
      x: [0,2],
      y: [0,2],
    },
    2: { // 1
      x: [3,5],
      y: [0,2],
    },
    3: { // 2
      x: [6,8],
      y: [0,2],
    },
    4: { // 3
      x: [0,2],
      y: [3,5],
    },
    5: { // 4
      x: [3,5],
      y: [3,5],
    },
    6: { // 5
      x: [6,8],
      y: [3,5],
    },
    7: { // 6
      x: [0,2],
      y: [6,8],
    },
    8: { // 7
      x: [3,5],
      y: [6,8],
    },
    9: { // 8
      x: [6,8],
      y: [6,8],
    },
  };

  let result = false;

  for (let [oKey, oValue] of Object.entries(cc)) {
    if (oValue.x[0] <= x && oValue.x[1] >= x && oValue.y[0] <= y && oValue.y[1] >= y) {
      result = Number(oKey);
      break;
    }
  }

  return result;
}

module.exports = cubeIndex;
