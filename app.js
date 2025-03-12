const BASE_URL = "https://theslider.willitcode.com/"

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
    };
};

function setupSliderEventListener() {
    document.getElementById("slider").oninput = function() {
        history.replaceState(null, "", getCurrentSliderStateURL());
    }
}
