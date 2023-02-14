function myCallback() {
    return "Hay Guys! ";
    }
    function main(x, callback) {
    return callback()+x;
    }
    document.getElementById("callback").innerHTML = main("ini callback",myCallback);