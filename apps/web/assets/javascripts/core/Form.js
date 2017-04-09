import Errors from './Errors';

class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors();
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }
    
    this.errors.clear();
  }

  data() {
    let data = {};

    for (let property in this.originalData) {
      data[property] = this[property];
    }

    return data;
  }

  onSuccess(data) {
    alert(data.success);

    this.reset();
  }

  onFail(errors) {
    this.errors.record(errors);
  }

  post(url) {
    this.submit('post', url);
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess(response.data);

          resolve(reponse.data);
        })
        .catch(error => {
          this.onFail(error.response.data);

          reject(error.response.data);
        });
    });
  }
}

export default Form;