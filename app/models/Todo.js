export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get Template() {
    return `
      <div class="card">
  <div class="card-body">
    ${this.description}
  </div>
  <button class="btn btn-primary btn-sm" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>
  <button class="btn btn-primary btn-sm" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Complete</button>
</div>
 `
  }
}



//	<button class="btn btn-primary" onclick="app.controllers.todoService.removeTodo(${this._id})>Submit</button>

/* <div class="card">
  <div class="card-body">
    ${this.description}
  </div>
  <button class="btn btn-primary" onclick="app.controllers.todoService.removeTodo(${this._id}">Submit</button>
</div> */

  // <ul>
  //   <li>${this.description}</li>
  // </ul> `