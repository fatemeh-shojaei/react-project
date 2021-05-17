const setItem = (key: string, value: string) => void {
  localStorage.setItem(key, value),
};

const getItem = key=> {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  return false;
};
export {setItem, getItem};
