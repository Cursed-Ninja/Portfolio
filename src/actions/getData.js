import * as api from "../api/index";

export const getCodeforcesData = async () => {
  try {
    const { data } = await api.getCodeforcesData();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCodechefData = async () => {
  try {
    const { data } = await api.getCodechefData();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAtcoderData = async () => {
  try {
    const { data } = await api.getAtcoderData();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLeetcodeData = async () => {
  try {
    const { data } = await api.getLeetcodeData();
    return data;
  } catch (error) {
    console.log(error);
  }
};
