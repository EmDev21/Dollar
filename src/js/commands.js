// Search something on google, if no arguments are provided => www.google.com
g = google;
function google(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    } else {
        window.open("https://www.google.com");
    }
}

yt = youtube
function youtube(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.youtube.com/results?search_query=" + search);
    } else {
        window.open("https://www.youtube.com/");
    }
}

gh = github
function github(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://github.com/search?q=" + search);
    } else {
        window.open("https://github.com/");
    }
}

gl = gitlab
function gitlab(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://gitlab.com/search?search=" + search);
    } else {
        window.open("https://gitlab.com/");
    }
}

wikt = wiktionary
wikt = wiktionary
function wiktionary(cmd) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://en.wiktionary.org/w/index.php?search=" + search);
    } else {
        window.open("https://en.wiktionary.org/");
    }
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}
