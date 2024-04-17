const BASE_URL = "https://willitcode.github.io/theslider/"

function getCurrentSliderStateURL() {
    return BASE_URL + "?v=" + document.getElementById("slider").value;
}

function copyLink() {
    navigator.clipboard.writeText(getCurrentSliderStateURL());
};

function setSlider() {
    var params = new URLSearchParams(window.location.search);
    if (params.get("v") != null) {
        document.getElementById("slider").value = params.get("v");
        /* can't decide if I should disable the slider or not... I don't think I should */
    };
};

function setupSliderEventListener() {
    document.getElementById("slider").oninput = function() {
        history.replaceState(null, "", getCurrentSliderStateURL());
    }
}
