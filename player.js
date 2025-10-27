export const players = (name, marker, score) => {
  function getName() {
    return name;
  }
  function getMarker() {
    return marker;
  }
  function getScore() {
    return score;
  }
  return { name, marker, score, getName, getMarker };
};
