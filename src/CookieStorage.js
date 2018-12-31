class CookieStorage {

  constructor() {
    this.cookies = readCookies();
  }

  setCookie(name, value) {
    setCookie(name, value);
    this.cookies[name] = value;
  }

  getCookie(name) {
    return this.cookies[name];
  }
}

const readCookies = () => {
  const cookies = {};
  const documentCookies = document.cookie.split(';');
  documentCookies.forEach(cookie => {
    const [key, value] = cookie.split('=').map(str => str.trim());
    cookies[key] = value;
  });
  return cookies;
}

const setCookie = (key, value) => {
  document.cookie = `${key}=${value};`
}

export default CookieStorage;