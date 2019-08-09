// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow
} = require('electron')
const isDev = require("electron-is-dev");
const path = require("path");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {


  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 900,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  })
  mainWindow.setMenuBarVisibility(false);

  // and load the index.html of the app.
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`); // electron window minimum, close
  mainWindow.webContents.executeJavaScript(`
      const { remote, ipcMain, Notification } = require('electron')
      const os = require('os');
      const storage = require('electron-json-storage');
      storage.setDataPath(os.homedir()+'/AppData/Local/blasmoji');
   
      document.getElementById("minimum").addEventListener("click", function(e) {
        var window = remote.getCurrentWindow(); 
        window.minimize();
      })
  
      document.getElementById("close").addEventListener("click", function (e) {
  
            storage.remove('settings', function(error) {
              if (error) throw error;
            });
  
            storage.remove('monitor_proxies', function(error) {
              if (error) throw error;
            });
  
            storage.remove('task_proxies', function(error) {
              if (error) throw error;
            });
  
            storage.remove('tasks', function(error) {
              if (error) throw error;
            });
  
            storage.remove('profiles', function(error) {
              if (error) throw error;
            });
  
            storage.set('settings', { settings: localStorage.getItem("settings")}, function(error) {
              if (error) throw error;
            });
  
            storage.set('monitor_proxies', { monitor_proxies: localStorage.getItem("monitor_proxies")}, function(error) {
              if (error) throw error;
            });
  
            storage.set('task_proxies', { task_proxies: localStorage.getItem("task_proxies")}, function(error) {
              if (error) throw error;
            });
      
            storage.set('tasks', { tasks: localStorage.getItem("tasks")}, function(error) {
              if (error) throw error;
            });
  
            storage.set('profiles', { profiles: localStorage.getItem("profiles")}, function(error) {
              if (error) throw error;
            });
  
        setTimeout(function() {
          var window = remote.getCurrentWindow();
          window.close();
        }, 1000);
      }); 
  
      document.getElementById("captchabtn").addEventListener("click", function (e) {
        const BrowserWindow = remote.BrowserWindow;
        const win = new BrowserWindow({
          height: 670,
          width: 350,
          frame: false,
          resizable: false,
          webPreferences: {
            nodeIntegration: true,
          }
        });
        win.setMenuBarVisibility(false);
        win.loadFile('public/captcha.html');
      })
    `)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.