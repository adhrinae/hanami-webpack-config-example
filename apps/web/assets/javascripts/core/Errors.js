class Errors {
  constructor() {
    this.errors = {};
  }

  has(field) {
    return this.errors.hasOwnProperty(field);
  };

  any() {
    return Object.keys(this.errors).length > 0;
  }
  
  get(field) {
    let error_msg = this.errors[field];
    
    if (error_msg) {
      return `The ${field} ${error_msg[0]}`;
    }
  }

  clear(field) {
    if (field) { 
      let target_field = field.match(/\[(\D+)\]/)[1];
      delete this.errors[target_field];

      return;
    }
    
    this.errors = {};
  }

  record(errors) {
    this.errors = errors;
  }
}

export default Errors;