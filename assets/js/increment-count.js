(async () => {
  const res = await fetch(
    "https://page-view-counter-api.yasuaki640.workers.dev/increment-count",
  );
  const json = await res.json();
  const count = json.count;

  document.getElementById(
    "page-view-counter",
  ).innerText = `⭐⭐⭐あなたは${count}人目の訪問者です。⭐⭐⭐`;
})();
