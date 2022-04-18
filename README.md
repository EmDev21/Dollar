# Dollar

A startpage looking like a terminal !

![](preview.png)

# How to add commands ?

The commands are located in /src/js/commands.js\
The wiki contains a section on how to add commands.

```js
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
```
# What about theming ?

Colors can be changed in /src/style/terminal.css\
The wiki contains a section on how to change the colors.

```css
:root {
    --main-bg-color: #E3B23C;
    --prompt-bg-color: #262626;
    --text-color: #E3B23C;
}
```
