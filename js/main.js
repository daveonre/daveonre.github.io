function toggleExperience() {
    var moreExperience = document.getElementById("more-experience");
    var btn = document.getElementById("see-more-btn");

    if (moreExperience.style.display === "none") {
        moreExperience.style.display = "block";
        btn.innerHTML = "See Less";
    } else {
        moreExperience.style.display = "none";
        btn.innerHTML = "See More";
    }
}
