function copyLink() {
    var sliderValue = document.getElementById("slider").value
    /* TODO: storage for base url */
    navigator.clipboard.writeText("http://localhost:8000/choice?v=" + sliderValue)
}
