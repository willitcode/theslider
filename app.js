function copyLink() {
    var sliderValue = document.getElementById("slider").value;
    /* TODO: storage for base url */
    navigator.clipboard.writeText("http://localhost:8000/?v=" + sliderValue);
};

function setSlider() {
    var params = new URLSearchParams(window.location.search);
    if (params.get("v") != null) {
        document.getElementById("slider").value = params.get("v");
        /* can't decide if I should disable the slider or not... I don't think I should */
    };
};
