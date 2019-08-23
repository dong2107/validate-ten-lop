function checkStr(str) {
    let regexp = /^[CAP][0-9]{4}[GHIKLM]$/
    if (regexp.test(str)){
        return true;
    }
    return false;
}
function checkClass() {
    let stg =document.getElementById('txt').value;
    console.log(checkStr(stg));
}