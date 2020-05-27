import { FETCH_FACT, NEW_FACT } from './type';

export const fetchFact = () => (dispatch) => {
  console.log('fetching');
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then((res) => res.json())
    .then((res) => {
      console.log('res', res);
      const fact = [{ text: res.text, source: res.source }];
      console.log('fact', fact);
      dispatch({
        type: FETCH_FACT,
        payload: fact
      });
      // this.setState({ facts: [{ text: data.text, source: data.source }] });
    });
};
