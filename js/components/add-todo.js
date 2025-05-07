import Alert from "./alert.js";

class AddTodo {
  constructor() {
    this.btn = document.querySelector('#add');
    this.title = document.querySelector('#title');
    this.description = document.querySelector('#description');
    this.alert = new Alert('alert');
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (title.value === '' || description.value === '') {
        this.alert.show('Title and Description are required!');
      } else {
        this.alert.hide();
        callback(this.title.value, this.description.value);
      }
    }
  }
}

export default AddTodo;
