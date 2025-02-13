const toDoServices = () => {
  const getResource = async (url: string) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  const getToDos = () => {
    return getResource('https://jsonplaceholder.typicode.com/todos');
  };
  const getUsers = () => {
    return getResource('https://jsonplaceholder.typicode.com/users');
  };

  return {
    getToDos,
    getUsers,
  };
};

export default toDoServices;
