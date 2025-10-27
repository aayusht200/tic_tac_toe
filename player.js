export const players = (name, marker) => {
  function getName() {
    return name;
  }
  function getMarker() {
    return marker;
  }
  return { name, marker, getName, getMarker };
};
