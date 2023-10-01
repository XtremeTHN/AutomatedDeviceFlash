const { app, BrowserWindow } = require('electron');
const ipc = require('electron').ipcMain
const path = require("path")

const new_window = () => {
    let win = new BrowserWindow({
        width: 1220,
        height: 800,
        frame: false, // Quita decoraciones de ventana
        // webPreferences: {
        //     preload: path.join(__dirname, 'GUI/scripts/preload.js'),
        // }
    })

    win.loadFile('GUI/templates/index.html')
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    new_window()
})

ipc.on('close', () => {
    app.quit()
})

ipc.on('minimize', () => {
    const win = BrowserWindow.getFocusedWindow()
    win.minimize()
})

ipc.on('join', (event, arg) => {
    path.join(...arg)
    win.webContents.send("fromMain", ) 
})