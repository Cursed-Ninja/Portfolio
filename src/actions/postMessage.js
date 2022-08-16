import * as api from "../api/index";

export const postMessage = async (formData) => {
  try {
    const res = await api.postMessage(formData);
    return res;
  } catch (error) {
    return error;
  }
};
