class View {
  constructor() {
    this.model = null;
    this.table = document.querySelector('#table');
    const btn = document.querySelector('#add');
    btn.onclick = () => this.addTodo('Title', 'Description');
  }

  setModel(model) {
    this.model = model;
  }

  addTodo(title, description) {
    this.model.addTodo(title, description);
  }
}

export default View;
