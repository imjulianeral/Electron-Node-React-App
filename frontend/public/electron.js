const { app, BrowserWindow } =  require('electron');
const path =  require('path');
const isDev =  require('electron-is-dev');

let appWindow;

function createWindow() {
    appWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        center: true,
        minWidth: 600,
        minHeight: 400,
        icon: 'logo512.png',
        show: 'false'
    });

    appWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${ path.join(__dirname, '../build/index.html') }`
    );

    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (appWindow === null) {
        createWindow();
    }
})