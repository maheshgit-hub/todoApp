const todoKey = "reactTodo";
export const getLocalStoragedata = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};

export const setLocalStorageData = (task) => {
    localStorage.setItem(todoKey, JSON.stringify(task));
};
