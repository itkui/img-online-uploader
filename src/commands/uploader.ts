import * as vscode from 'vscode';
import picgo from './../picgo';
import { setHistory } from './../utils';

export const useUploader = (ctx: vscode.ExtensionContext) => {
  return vscode.commands.registerCommand('img-online-uploader.upload-image', async (file) => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    // vscode.window.showInformationMessage('请选择需要生成在线地址的图片');
    if (!file) {
      // 如果不存在文件，则表明是命令启动
      file = await vscode.window.showOpenDialog({
        canSelectFiles: true
      }).then(res => res?.[0]);
    }

    if (!file) { return; }

    const path = file.path;

    picgo.upload([path]);

    /**
     * 上传完成回调
     */
    picgo.on('finished', ({ output }: any) => {
      const { imgUrl, type } = output[0];
      vscode.window.showInformationMessage(`上传成功！路径为${imgUrl}`);
      setHistory({ imgUrl, type }, ctx);
    });
  });
};
