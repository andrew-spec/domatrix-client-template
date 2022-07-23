let localStorage = window.localStorage || {}
const exports = {};
exports.submitToLocalStorage = name => {
    localStorage[name + 'Value'] = document.getElementById(name).value || ''
    localStorage[name + 'Checked'] = document.getElementById(name).checked || 'false'
    return false
}
exports.retrieveFromLocalStorage = name => {
    document.getElementById(name).value = localStorage[name + 'Value'] || ''
    document.getElementById(name).checked = localStorage[name + 'Checked'] === 'true'
    return false
}
exports.lerp = function (v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}
exports.handleLargeNumber = (a, cullZeroes = false) => {
    if (cullZeroes && a <= 0)
        return '';

    if (a < 1e3)
        return a.toFixed(0) + '';

    if (a < 1e6)
        return (a / 1e3).toFixed(2) + 'k'; //Thousand

    if (a < 1e9)
        return (a / 1e6).toFixed(2) + 'm'; //Million

    if (a < 1e12)
        return (a / 1e9).toFixed(2) + 'b'; //Billion

    if (a < 1e15)
        return (a / 1e12).toFixed(2) + 't'; //Trillion

    if (a < 1e18)
        return (a / 1e18).toFixed(2) + 'qt'; //quadrillion
    
    if (a < 1e21)
        return (a / 1e21).toFixed(2) + 'q'; //Quintilian
    
    if (a < 1e24)
        return (a / 1e24).toFixed(2) + 'st'; //Sextrillion
    
    if (a < 1e27)
        return (a / 1e27).toFixed(2) + 's'; //Septrillion
    
    if (a < 1e30)
        return (a / 1e30).toFixed(2) + 'o'; //Octillion
    
    if (a < 1e33)
        return (a / 1e33).toFixed(2) + 'n'; //Nonillion
    
    if (a < 1e36)
        return (a / 1e36).toFixed(2) + 'd'; //Decillion
    
    //After this point gives you a infinite score value    
    
    if (a < 1e39)
        return (a / 1e39).toFixed(2) + 'Ud'; //Undecillion
    
    if (a < 1e42)
        return (a / 1e42).toFixed(2) + 'Dd'; //Duodecillion
    
    if (a < 1e45)
        return (a / 1e45).toFixed(2) + 'Td'; //Tredecillion
    
    if (a < 1e48)
        return (a / 1e48).toFixed(2) + 'Qt'; //Quattuordecillion

    if (a < 1e51)
        return (a / 1e51).toFixed(2) + 'Qd'; //Quindecillion

    if (a < 1e54)
        return (a / 1e54).toFixed(2) + 'Sd'; //Sexdecillion

    if (a < 1e57)
        return (a / 1e57).toFixed(2) + 'St'; //Septen-decillion

    if (a < 1e60)
        return (a / 1e60).toFixed(2) + 'Od'; //Octodecillion

    if (a < 1e63)
        return (a / 1e63).toFixed(2) + 'Nd'; //Novemdecillion

    if (a < 1e66)
        return (a / 1e66).toFixed(2) + 'Vt'; //Vigintillion

    if (a < 1e306)
        return (a / 1e306).toFixed(2) + 'Ct'; //Centillion
                        
    return '\u221E'
};
exports.timeForHumans = x => {
    // ought to be in seconds
    let seconds = x % 60;
    x /= 60; x = Math.floor(x);
    let minutes = x % 60;
    x /= 60; x = Math.floor(x);
    let hours = x % 24;
    x /= 24; x = Math.floor(x);
    let days = x;
    let y = '';
    function weh(z, text) {
        if (z) { y = y + ((y === '') ? '' : ', ') + z + ' ' + text + ((z > 1) ? 's' : ''); }
    }
    if (days > 300)
        return 'FOREVER'
    weh(days, 'day');
    weh(hours, 'hour');
    weh(minutes, 'minute');
    weh(seconds, 'second');
    if (y === '') { y = 'less than a second'; }
    return y;
};
exports.addArticle = string => {
    return /^\s*[aeiouAEIOU]/.test(string) ? 'an ' + string : 'a ' + string;
};
exports.formatLargeNumber = x => {
    if (x < 1e306)
        return x.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return '\u221E'
};
exports.pullJSON = url => {
    if (window.fetch)
        return fetch(url, { cache: 'no-cache' }).then(r => r.json())
    let request = new XMLHttpRequest();
    // Set up the request
    console.log("Loading JSON from " + url);
    request.responseType = 'json';
    // Return a promise
    return new Promise((resolve, reject) => {
        request.open('GET', url);
        request.onload = () => { resolve(request.response); console.log('JSON load complete.'); };
        request.onerror = () => { reject(request.statusText); console.log('JSON load failed.'); console.log(request.statusText); };
        request.send();
    });
};
export { exports as util };
