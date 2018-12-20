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

window.onload = function () {
    if (isSafari()) {
        var shade = document.getElementById('Safarijpg');
        shade.style.display = 'block';

        // var nodis = document.getElementById('XiaZai');
        // nodis.style.display = 'none';

        // document.getElementById("BiaoTi").setAttribute("class","BiaoTi BiaoTi1");
    }
}

function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/Safari/i) == 'Safari') {
        return true;
    } else {
        return false;
    }
}
