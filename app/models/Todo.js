export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get Template() {
    let template = `<div class="form-check form-inline display:flex" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">`
    if (this.completed == false) {
      template += `<input type="checkbox" class="form-check-input" value="">
      <label class="form-check-label"> ${this.description}</label>`
    } else {
      template += `<input type="checkbox" class="form-check-input" value="" checked>
      <label class="form-check-label completed-task" > ${this.description} </label>`

    }
    return template += `<div class="delete-todo" onclick="app.controllers.todoController.removeTodo('${this._id}')">&nbsp;&nbsp; x </div>
    </div>`
  }
}



