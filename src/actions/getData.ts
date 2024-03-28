import * as api from "../api/index";
import {
  CodeforcesApiResponse,
  CodechefApiResponse,
  AtcoderApiResponse,
  LeetcodeApiResponse,
} from "../types/types";

export const getCodeforcesData = async (
  username: string
): Promise<CodeforcesApiResponse | undefined> => {
  try {
    const { data } = await api.getCodeforcesData(username);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCodechefData = async (
  username: string
): Promise<CodechefApiResponse | undefined> => {
  try {
    const { data } = await api.getCodechefData(username);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAtcoderData = async (
  username: string
): Promise<AtcoderApiResponse | undefined> => {
  try {
    const { data } = await api.getAtcoderData(username);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLeetcodeData = async (
  username: string
): Promise<LeetcodeApiResponse | undefined> => {
  try {
    const { data } = await api.getLeetcodeData(username);
    return data;
  } catch (error) {
    console.log(error);
  }
};
