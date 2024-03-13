export const saveToLocalStorage = (key, value) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromLocalStorage = (key) => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(key)) || [];
};
