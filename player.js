export const players = (name, marker, score) => {
  function getName() {
    return name;
  }
  function getMarker() {
    return marker;
  }
  return { name, marker, score, getName, getMarker };
};
