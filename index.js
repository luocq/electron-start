/*
 * @Author: luocq luocq@pku.edu.cn
 * @Date: 2023-03-07 08:25:01
 * @LastEditors: luocq
 * @LastEditTime: 2023-03-07 08:29:14
 * @Description:
 */
const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
