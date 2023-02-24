

const MangaList = [];

const MangaListElement = document.querySelector("#myUL");

document.querySelector("#add_button").addEventListener("click", addManga);
document.querySelector("#myInput").addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    addManga()
  }
});


function addManga() {
  const MangaText = document.querySelector("#myInput").value;

  if (MangaText == "") {
    alert("You did not enter any item");
  } else {
    const MangaObject = {
      id: MangaList.length,
      MangaText: MangaText,
      isDone: false,
    };


    MangaList.unshift(MangaObject);
    displayMangas();
  }
}


function doneManga(MangaId) {
  const selectedMangaIndex = MangaList.findIndex((item) => item.id == MangaId);

  MangaList[selectedMangaIndex].isDone
    ? (MangaList[selectedMangaIndex].isDone = false)
    : (MangaList[selectedMangaIndex].isDone = true);
  displayMangas();
}


function deleteItem(x) {
  MangaList.splice(
    MangaList.findIndex((item) => item.id == x),
    1
  );
  displayMangas();
}


function displayMangas() {
  MangaListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";

  MangaList.forEach((item) => {
    const listElement = document.createElement("li");
    const delBtn = document.createElement("i");

    listElement.innerHTML = item.MangaText;
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
      doneManga(selectedId);
    });

    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data-id");
      deleteItem(delId);
    });

    MangaListElement.appendChild(listElement);
    listElement.appendChild(delBtn);
  });
}