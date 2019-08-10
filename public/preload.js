window.os = require('os');
window.remote=require('electron');
window.storage = require('electron-json-storage');
window.storage.setDataPath(os.homedir()+'/AppData/Local/Blasmoji/test');