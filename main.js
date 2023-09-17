const { app, BrowserWindow } = require('electron');

const new_window = () => {
    const win = new BrowserWindow({
        width: 1100,
        height: 710,
        frame: false, // Quita decoraciones de ventana
    })

    win.loadFile('GUI/templates/index.html')
}

app.whenReady().then(() => {
    new_window()
})
