const {app, BrowserWindow} = require('electron');

const path = require('path');
const {resolveHtmlLocation} = require("./utils");

try {
    require('electron-reloader')(module);
} catch (error) {
    console.error(error);
}

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Phasmophobia Save Editor',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile(resolveHtmlLocation('index.html')).then();
};

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});