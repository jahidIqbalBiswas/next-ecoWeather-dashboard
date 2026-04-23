import { getLocationByName } from "../location-util";

export async function GET(request, { params }) {
  const locationName = await params.name;
  const location = getLocationByName(locationName);
  return Response.json(location);
}
