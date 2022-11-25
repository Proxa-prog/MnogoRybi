import { getProductionsAction } from "app/store/reducers/productions";
import axios from "axios";
import { CARD_URL } from "entities/constants/constants";

export const fetchProductions = async (dispatch: any) => {
  const response = await axios.get(CARD_URL);
  dispatch(getProductionsAction(response.data));
};

export const getProductions = () => async (dispatch: any) => {
  try {
    fetchProductions(dispatch);
  } catch (error) {
    console.error(error);
  }
};
