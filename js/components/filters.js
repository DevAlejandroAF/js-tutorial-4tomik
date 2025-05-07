class Filters {
  constructor() {
    this.form = document.querySelector('#filters');
    this.btn = document.querySelector('#search');
  }

  onClick(callback) {
    this.btn.onclick = e => {
      e.preventDefault();
      const data = new FormData(this.form);
      callback({
        type: data.get('type'),
        words: data.get('words'),
      });
    }
  }
}

export default Filters;
