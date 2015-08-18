/*
* 【Store】
* データと状態を管理（状態管理ロジックもある）
* Actionでしか管理できない（No, Setter, Only Getter）
* Dispatcherにコーバックを登録する
*/

// todo-store.js
let _todos = {}; // private data

// setter
function create(text) {
  let id = (+new Data()).toString();
  _todos[id] = {
    id: id,
    text: text
  };
}

class TodoStore extend EventEmitter {
  constructor() {

  }
  // getter
  getAll() {
    return _todos;
  }

  emitChange() {
    this.emit('change');
  }
}

export default new TodoStore;


AppDispatcher.register(action => {
  switch(action.actionType) {
    case AppConstants.TODO_CREATE;
      let text = action.text.trim();
      if (text !== '') {
        create(text);
        this.emitChange();
      }
      break;
    default:

  }
});