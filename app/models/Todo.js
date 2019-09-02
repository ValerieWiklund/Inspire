export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get Template() {
    let template = `<div class="form-check" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">`
    if (this.completed == false) {
      template += `<input type="checkbox" class="form-check-input" value="">
      <label class="form-check-label"> ${this.description}</label>
        </div>
        <button class="btn btn-primary btn-sm" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>`
    } else {
      template += `<input type="checkbox" class="form-check-input" value="" checked>
      <label class="form-check-label completed-task" > ${this.description} </label>
        </div>
       <button class="btn btn-primary btn-sm" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>`
    }
    return template
  }
}
