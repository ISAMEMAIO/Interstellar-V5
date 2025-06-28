document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fv");
  const input = document.getElementById("iv");
  if (form && input) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      processUrl(input.value);
    });
  }
});

function processUrl(value) {
  let url = value.trim();
  const engine = localStorage.getItem("engine") || "https://www.bing.com/search?q=";
  if (!isUrl(url)) {
    url = engine + encodeURIComponent(url);
  } else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
    url = `https://${url}`;
  }
  sessionStorage.setItem("GoUrl", __uv$config.encodeUrl(url));
  window.location.href = `/a/${__uv$config.encodeUrl(url)}`;
}

function isUrl(val = "") {
  return /^http(s?):\/\//.test(val) || (val.includes(".") && val.substr(0, 1) !== " ");
}
