// Terminal config
config = {
    shellPrompt: "$ "
}

document.getElementById("input_title").innerText = config.shellPrompt;
document.getElementById('input_source').addEventListener('keyup', submit_command);
document.getElementById('input_source').addEventListener('keyup', getLastCommand);

var current_block;

function new_block() {
    current_block = document.createElement("div");
    current_block.classList.add("log");
    document.getElementById('wrapper').appendChild(current_block);
}

function block_log(message) {
    current_block.innerHTML = "<p>" + message + "</p>";
    new_block();
}

function submit_command() {
    if (!(event.keyCode === 13)) return;
    var input = document.getElementById("input_source").value;
    document.getElementById("input_source").value = "";

    new_block();

    command = input.split(" ")[0];
    args = input.replace(command, "")

    if (typeof window[command] === "function") {
        block_log(config.shellPrompt + command + " " + args);
        window[command](args);
        lastCommand = command + args;
    } else if (command != "") {
        block_log("command not found : " + command);
    }
}

function getLastCommand() {
    if (!(event.keyCode === 38)) return;
    if (lastCommand) {
        document.getElementById("input_source").value = lastCommand;
    }
}