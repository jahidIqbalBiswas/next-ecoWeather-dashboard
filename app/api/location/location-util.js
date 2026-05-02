const locations = [
  { location: "Barishal", latitude: 22.701, longitude: 90.3535 },
  { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { location: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  { location: "Delhi", latitude: 28.6139, longitude: 77.209 },
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { location: "New York", latitude: 40.7128, longitude: -74.006 },
  { location: "London", latitude: 51.5074, longitude: -0.1278 },
  { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "Dubai", latitude: 25.2048, longitude: 55.2708 },
  { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Cape Town",
    latitude: -33.9249,
    longitude: 18.4241,
  },
  { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { location: "Istanbul,Turkey", latitude: 41.0082, longitude: 28.9784 },
];
function getLocations() {
  return locations;
}
function getLocationByName(location) {
  if (!location) return null;
  const found = locations.find(
    (loc) => location.toLowerCase() === loc.location.toLowerCase(),
  );
  return found || {};
}
export { getLocationByName, getLocations };
