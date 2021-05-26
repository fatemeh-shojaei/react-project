const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const getItem = (key: string) => {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};

export { setItem, getItem };
