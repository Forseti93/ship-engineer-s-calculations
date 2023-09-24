export const twoObjectsSame = (obj1: any, obj2: any): boolean =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

export const windowUndefined = (): boolean => typeof window == "undefined";

export const localStorageHas = (key: string): boolean =>
  !!localStorage.getItem(key);

export const getLocalStorageAndParse = (key: string): any =>
  JSON.parse(localStorage.getItem(key)!);

export const alertIfNaN = (e: any) => {
  console.dir(e);
  let value;
  // if (e.key) {
  //   value = e.key;
  // } else {
  //   value = e.nativeEvent.data;
  // }
  e.key ? (value = e.key) : (value = e.nativeEvent.data);
  if (isNaN(value)) {
    e.preventDefault();
    window.alert("Only numbers allowed");
  }
};
