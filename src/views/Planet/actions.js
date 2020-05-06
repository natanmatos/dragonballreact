import { axios } from "../../config/axiosConfig";

export async function getListPlanet() {
  try {
    const { data } = await axios.get("planet");
    return data;
  } catch {
    return [];
  }
}
