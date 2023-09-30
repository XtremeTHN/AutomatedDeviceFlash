const { app, BrowserWindow } = require('electron');
const ipc = require('electron').ipcMain
const path = require("path")

const new_window = () => {
    let win = new BrowserWindow({
        width: 1100,
        height: 710,
        frame: false, // Quita decoraciones de ventana
        webPreferences: {
            preload: path.join(__dirname, 'GUI/scripts/preload.js'),
        }
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

"<a href="https://www.flaticon.com/free-icons/automatic" title="automatic icons">Automatic icons created by Freepik - Flaticon</a>"