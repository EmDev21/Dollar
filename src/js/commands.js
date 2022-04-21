// Search something on google, if no arguments are provided => www.google.com
g = google
function google(args) {
	if (args != undefined) {
		search = args.replace(" ", "+")
		window.location.href = "https://www.google.com/search?q=" + search
	} else {
		window.location.href = "https://www.google.com"
	}
}

// Search something on duckduckgo, if no arguments are provided => duckduckgo.com
d = duckduckgo
function duckduckgo(args) {
	if (args != undefined) {
		search = args.replace(" ", "+")
		window.location.href = "https://duckduckgo.com/?q=" + search
	} else {
		window.location.href = "https://duckduckgo.com/"
	}
}

// Display time
time = clock
function clock(args) {
	var today = new Date()
	block_log(
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
	)
}

// Clear the terminal
cls = clear
function clear(args) {
	document.getElementById("wrapper").innerHTML = ""
}

textcolor = setColor
function setColor(args) {
	if (args != undefined) {
		document.documentElement.style.setProperty("--text-color", args)
		document.cookie = "textcolor=" + args
	}
}

bgcolor = setBgColor
function setBgColor(args) {
	if (args != undefined) {
		document.documentElement.style.setProperty("--main-bg-color", args)
		document.cookie = "bgcolor=" + args
	}
}

promptcolor = setPromptColor
function setPromptColor(args) {
	if (args != undefined) {
		document.documentElement.style.setProperty("--prompt-bg-color", args)
		document.cookie = "promptcolor=" + args
	}
}
