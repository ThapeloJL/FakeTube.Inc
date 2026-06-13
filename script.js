//Cursor Features 
// Video Search Filtering Feature
const searchInput = document.querySelector("input");

searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();

    document.querySelectorAll(".video").forEach(video => {
        const title = video.innerText.toLowerCase();

        if(title.includes(query)){
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    });
});