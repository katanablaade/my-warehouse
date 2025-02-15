import { useState, useEffect } from 'react';
import { User, ToDoProps } from '../../types';

import ToDoItem from '../ToDoItem/ToDoItem';
import toDoServices from '../../services/toDoServices';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './ToDo.css';

function ToDo() {
  const [users, setUsers] = useState<User[]>([]);
  const [todoes, setTodoes] = useState<ToDoProps[]>([]);
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
            <ToDoItem key={user.id} user={user} todoes={todoes} />
          ))
        )}
      </div>
    </div>
  );
}

export default ToDo;
