function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

const input = document.getElementById("search-input");
const results = document.getElementById("search-results");

let fuse;
let pendingQuery = "";

function runSearch(query) {

  if (!query.length) {
    results.innerHTML = "";
    return;
  }

  if (!fuse) return;

  const matches = fuse.search(query);

  results.innerHTML = matches.map(item => `
    <article class="overflow-hidden rounded-xl border border-green-800 bg-black/20 shadow-lg transition-all duration-300 hover:border-green-600 hover:shadow-green-900/40">
      <div class="p-6">
        <a href="${item.item.permalink}">
          <h2 class="mb-3 text-2xl font-bold text-green-300 transition-colors hover:text-green-200">
            ${escapeHtml(item.item.title)}
          </h2>
        </a>
        <div class="mb-6 text-green-200 leading-relaxed">
          ${escapeHtml(item.item.summary)}
        </div>
        <div class="text-right">
          <a href="${item.item.permalink}" class="inline-flex items-center rounded-lg bg-green-600 px-5 py-3 font-semibold text-black transition-colors hover:bg-green-500">
            Read More
          </a>
        </div>
      </div>
    </article>
  `).join("");

}

fetch("/index.json")
  .then(response => {
    if (!response.ok) throw new Error("Failed to load index.json");
    return response.json();
  })
  .then(data => {

    fuse = new Fuse(data, {
      keys: ["title", "content", "summary"],
      includeScore: true,
      threshold: 0.4
    });

    if (pendingQuery) {
      runSearch(pendingQuery);
      pendingQuery = "";
    }

  })
  .catch(err => console.error("Search index failed to load:", err));

input.addEventListener("input", function () {
  runSearch(this.value);
});

const urlParams = new URLSearchParams(window.location.search);
const urlQuery = urlParams.get("q");
if (urlQuery) {
  input.value = urlQuery;
  if (fuse) {
    runSearch(urlQuery);
  } else {
    pendingQuery = urlQuery;
  }
}
