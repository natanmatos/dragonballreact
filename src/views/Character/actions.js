import { axios } from "../../config/axiosConfig";

export async function getListCharacter() {
  try {
    const { data } = await axios.get("character");
    return data;
  } catch {
    return [];
  }
}
