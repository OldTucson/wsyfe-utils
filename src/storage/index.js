/**
 * 设置sessionStorage
 * @param {*} name session名称
 * @param {*} content session值
 */
const setSession = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取sessionStorage
 * @param {*} name  session名称
 */
const getSession = (name) => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};
/**
 * 删除sessionStorage
 * @param {*} name session名称
 */
const removeSession = (name) => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};

/**
 * 设置cookie
 * @param name cookie名称
 * @param value cookie值
 * @param iDay 保存天数
 */
const setCookie = (name, value, iDay) => {
  let oDate = new Date();
  oDate.setDate(oDate.getDate() + iDay);
  document.cookie = name + "=" + value + ";expires=" + oDate;
};

/**
 * 获取cookie
 * @param name cookie的名称
 * @returns {*}
 */
const getCookie = (name) => {
  let arr = document.cookie.split("; ");
  for (let i = 0; i < arr.length; i++) {
    let arr2 = arr[i].split("=");
    if (arr2[0] == name) {
      return arr2[1];
    }
  }
  return "";
};

/**
 * 删除cookie
 * @param name
 */
const removeCookie = (name) => {
  setCookie(name, 1, -1);
};

const session = {
  setSession,
  getSession,
  removeSession,
};

const cookie = {
  setCookie,
  getCookie,
  removeCookie,
};
const storage = {
  session,
  cookie,
};

export default storage;
