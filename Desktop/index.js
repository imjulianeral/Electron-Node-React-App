const { app, BrowserWindow } = require('electron');

let appWindow;

function createWindow() {
    appWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        center: true,
        show: false
    });

    appWindow.on('closed', () => {
        appWindow = null;
    });

    appWindow.loadFile('./index.html');

    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })
}

app.on('ready', createWindow);
