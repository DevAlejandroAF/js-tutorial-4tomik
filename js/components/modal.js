import Alert from "./alert.js";

class Modal {
  constructor() {
    this.title = document.querySelector('#modal-title');
    this.description = document.querySelector('#modal-description');
    this.btn = document.querySelector('#modal-btn');
    this.completed = document.querySelector('#modal-completed');
    this.alert = new Alert('modal-alert');
    this.todo = null;
  }

  setValues(todo) {
    this.todo = todo;
    this.title.value = todo.title;
    this.description.value = todo.description;
    this.completed.checked = todo.completed;
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (!this.title.value || !this.description.value) {
        this.alert.show('Title and Description are required!');
        return;
      }

      $('#modal').modal('toggle');
      callback(this.todo.id, {
        title: this.title.value,
        description: this.description.value,
        completed: this.completed.checked,
      });
    }
  }
}

export default Modal;
