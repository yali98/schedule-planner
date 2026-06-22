const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 440,
    height: 640,
    minWidth: 280,
    minHeight: 220,
    frame: false,            // 테두리 없음
    transparent: true,       // 진짜 투명
    resizable: true,         // 자유 리사이즈
    alwaysOnTop: false,
    backgroundColor: '#00000000',
    skipTaskbar: false,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => app.quit());

// 렌더러 → 메인 명령
ipcMain.on('win:close', () => win && win.close());
ipcMain.on('win:minimize', () => win && win.minimize());
ipcMain.on('win:toggle-pin', (e) => {
  if (!win) return;
  const next = !win.isAlwaysOnTop();
  win.setAlwaysOnTop(next);
  e.reply('win:pin-state', next);
});
