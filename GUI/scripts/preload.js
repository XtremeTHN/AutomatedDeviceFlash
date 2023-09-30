var { contextBridge, ipcRenderer } = require('electron');


// Expose windowApi in the main process
contextBridge.exposeInMainWorld('windowApi', {
    close: () => {
        ipcRenderer.send('close')
    },
    minimize: () => {
        ipcRenderer.send('minimize')
    },
    sendCustomEvent: ipcRenderer.send,
})

// Various path functions
contextBridge.exposeInMainWorld('path', 
    {
        join: send_
    }
)

// contextBridge.exposeInMainWorld('variables', {
//     rootDir: 
// })

contextBridge.exposeInMainWorld('events', {
    ipc: ipcRenderer
})