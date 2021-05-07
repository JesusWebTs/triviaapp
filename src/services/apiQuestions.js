export class ApiQuestions {
  uri;
  constructor({ uri }) {
    this.uri = uri;
  }

  getQuestions = async () => {
    return fetch(this.uri)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json.results[0];
      })
      .catch((err) => console.log(err));
  };
}
