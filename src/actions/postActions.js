import { FETCH_FACT, NEW_FACT } from './type';

export const fetchFact = () => (dispatch) => {
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((res) => res.json())
    .then((res) => {
      const fact = [{ text: res.text, source: res.source }];
      dispatch({
        type: FETCH_FACT,
        payload: fact
      });
    });
};

export const createFact = (factData) => (dispatch) => {
  dispatch({ type: NEW_FACT, payload: factData });
};
