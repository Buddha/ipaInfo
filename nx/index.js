window.onload = function () {
    if (isWeiXin()) {
        var shade = document.getElementById('shade');
        shade.style.display = 'block';

        // var nodis = document.getElementById('XiaZai');
        // nodis.style.display = 'none';

        // document.getElementById("BiaoTi").setAttribute("class","BiaoTi BiaoTi1");
    }
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

