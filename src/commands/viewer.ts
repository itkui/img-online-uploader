import * as vscode from 'vscode';

export const useViewer = (ctx: vscode.ExtensionContext) => {
  return vscode.commands.registerCommand('img-online-uploader.views-image', async () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage('views images');
  });
};