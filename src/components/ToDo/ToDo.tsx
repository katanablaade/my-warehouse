import { useState, useEffect } from 'react';

import toDoServices from '../../services/toDoServices';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './ToDo.css';

type User = {
  id: number;
  name: string;
  email: string;
};

type Todo = {
  id: number;
  userId: number;
};

function ToDo() {
  const [users, setUsers] = useState<User[]>([]);
  const [todoes, setTodoes] = useState<Todo[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { getUsers, getToDos } = toDoServices();

  const onUsers = () => {
    setIsLoading(true);
    getUsers()
      .then((res) => {
        setUsers(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
      });
  };

  const onTodoes = () => {
    setIsLoading(true);
    getToDos()
      .then((res) => {
        setTodoes(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
      });
  };

  useEffect(() => {
    onUsers();
    onTodoes();
  }, []);

  return (
    <div className="todo-table">
      <div className="todo-table__header">
        <span className="todo-table__header-number">#</span>
        <span className="todo-table__header-username">Username</span>
        <span className="todo-table__header-count">to-do count</span>
      </div>
      <div className="todo-list">
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <ErrorMessage />
        ) : (
          users.map((user) => (
            <div key={user.id} className="todo-list__item">
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
          ))
        )}
      </div>
    </div>
  );
}

export default ToDo;
