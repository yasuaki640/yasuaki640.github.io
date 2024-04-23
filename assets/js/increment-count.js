const STORAGE_KEY = "yasuaki640.github.io-visitorId";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateRandomString = (length) => {
  let res = "";
  const charLength = CHARS.length;
  for (let i = 0; i < length; i++) {
    res += CHARS.charAt(Math.floor(Math.random() * charLength));
  }

  return res;
};

const retrieveVisitorId = () => {
  const visitorId = localStorage.getItem(STORAGE_KEY);
  if (!visitorId) {
    localStorage.setItem(STORAGE_KEY, generateRandomString(16));
  }

  return visitorId;
};

(async () => {
  const visitorId = retrieveVisitorId();

  const url = new URL(
    "https://page-view-counter-api.yasuaki640.workers.dev/increment-count",
  );
  url.searchParams.append(STORAGE_KEY, visitorId);

  const res = await fetch(url);
  const { count } = await res.json();

  document.getElementById(
    "page-view-counter",
  ).innerText = `⭐⭐⭐あなたは${count}人目の訪問者です。⭐⭐⭐`;
})();
