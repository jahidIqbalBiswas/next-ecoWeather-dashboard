export const getLocationData = async (lat, lon) => {
  try {
    const response =
      await fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=${process.env.BIG_DATA_CLOUD_LOCATION_API_KEY}
`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
export const getLocationsLatLongList = async () => {
  try {
    const response = await fetch(`/api/location`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
export const getResolvedLatLong = async (locationName, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }
  const locationLatLong = await getLocationLatLong(locationName);
  if (locationLatLong.latitude && locationLatLong.longitude) {
    const lat = locationLatLong.latitude;
    const lon = locationLatLong.longitude;
    return { lat, lon };
  }
};
export const getLocationLatLong = async (locationName) => {
  try {
    const response = await fetch(
      `${process.env.APP_BASE_URI}/api/location/${locationName}`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
