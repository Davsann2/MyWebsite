

const AnimeList = [];

const AnimeListElement = document.querySelector("#myUL");

document.querySelector("#add_button").addEventListener("click", addAnime);
document.querySelector("#myInput").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addAnime()
  }
});


function addAnime() {
  const AnimeText = document.querySelector("#myInput").value;

  if (AnimeText == "") {
    alert("You did not enter any item");
  } else {
    const AnimeObject = {
      id: AnimeList.length,
      AnimeText: AnimeText,
      isDone: false,
    };


    AnimeList.unshift(AnimeObject);
    displayAnimes();
  }
}


function doneAnime(AnimeId) {
  const selectedAnimeIndex = AnimeList.findIndex((item) => item.id == AnimeId);

  AnimeList[selectedAnimeIndex].isDone
    ? (AnimeList[selectedAnimeIndex].isDone = false)
    : (AnimeList[selectedAnimeIndex].isDone = true);
  displayAnimes();
}


function deleteItem(x) {
  AnimeList.splice(
    AnimeList.findIndex((item) => item.id == x),
    1
  );
  displayAnimes();
}


function displayAnimes() {
  AnimeListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  AnimeList.forEach((item) => {
    const listElement = document.createElement("li");
    const delBtn = document.createElement("i");

    listElement.innerHTML = item.AnimeText;
    listElement.setAttribute("data-id", item.id);

    delBtn.setAttribute("data-id", item.id);
    delBtn.classList.add("far");
    delBtn.classList.add("fa-trash-alt");
    delBtn.setAttribute("data-id", item.id);

    if (item.isDone) {
      listElement.classList.add("checked");
    }

    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneAnime(selectedId);
    });

    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data-id");
      deleteItem(delId);
    });

    AnimeListElement.appendChild(listElement);
    listElement.appendChild(delBtn);
  });
}