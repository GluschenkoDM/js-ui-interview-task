const messageQueue = new Array();

function push(message) {
    return new Promise(resolve => {setTimeout(function() {resolve(messageQueue.push(message))}, Math.random() * 1.11)})
}

function get() {
    return new Promise(resolve => {setTimeout(function() {resolve(messageQueue)})});
}

module.exports = {push, get};
