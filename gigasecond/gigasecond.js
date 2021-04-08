//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (n) => {
  // throw new Error("Remove this statement and implement this function");
  let m = Date.parse(n)
  m = m + 1000000000000
  var d = new Date(m);
  return d
};
