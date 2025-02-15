import { ToDoProps, User } from '../../types';
import './ToDoItem.css';

type ToDoItemProps = {
  user: User;
  todoes: ToDoProps[];
};
function ToDoItem({ user, todoes }: ToDoItemProps) {
  return (
    <div className="todo-list__item">
      <div className="todo-list__item-number">{user.id}</div>
      <div className="todo-list__item-user">
        <img
          className="todo-list__item-img"
          src="../../public/user.png"
          alt="user"
        />
        <div className="todo-list__item-wrapper">
          <span className="todo-list__item-name">{user.name}</span>
          <span className="todo-list__item-mail">{user.email}</span>
        </div>
      </div>
      <div className="todo-list__item-count">
        {todoes.filter((todo) => todo.userId === user.id).length}
      </div>
    </div>
  );
}

export default ToDoItem;
