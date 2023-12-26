function onKeyDown(e) {
  const keyList = document.getElementById("insert");

  keyList.innerHTML = `
  <div class="key">
        ${e.key}
        <small>e.key</small>
      </div>

      <div class="key">
        ${e.keyCode}
        <small>e.keyCode</small>
      </div>

      <div class="key">
        ${e.code}
        <small>event.code</small>
      </div>`;
}

window.addEventListener("keydown", onKeyDown);
