const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('PLANNER_ENV', {
  isElectron: true,
  close: () => ipcRenderer.send('win:close'),
  minimize: () => ipcRenderer.send('win:minimize'),
  togglePin: () => ipcRenderer.send('win:toggle-pin'),
  onPinState: (cb) => ipcRenderer.on('win:pin-state', (_e, v) => cb(v))
});
