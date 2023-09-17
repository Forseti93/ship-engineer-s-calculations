export const twoObjectsSame = (obj1: any, obj2: any): boolean =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const windowUndefined = (): boolean => typeof window == "undefined";

export const localStorageHas = (key: string): boolean =>
  !!localStorage.getItem(key);

export const getLocalStorageAndParse = (key: string): any =>
  JSON.parse(localStorage.getItem(key)!);
