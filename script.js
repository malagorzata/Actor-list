fetch("actors.json") 
.then((res) => res.json())
// .then((data) => console.log(data))
  .then((response) => {
  listActors(response);
});

function listActors(data) {
    data.forEach(showActors);
}


function showActors(actors) {
    console.log(actors);
    const template = document.querySelector("#actorsTemplate").content;
    const clone = template.cloneNode(true);
    clone.querySelector(".fullname").textContent = actors.fullname;
    const parent = document.querySelector("#actorList .list");
    clone.querySelector(".actor").addEventListener("click", showDetails);
    parent.appendChild(clone);

    function showDetails(e) {
        document.querySelector(".details").classList.remove("hidden");
        document.querySelector(".details").classList.add("show");
        document.querySelector(".details .name").textContent = actors.fullname;
        document.querySelector(".details h3 span").textContent = actors.movie;
        document.querySelector(".exit").addEventListener("click", exitDetails);
      }

}

function exitDetails() {
    document.querySelector(".details").classList.remove("show");
    document.querySelector(".details").classList.add("hidden");
  }