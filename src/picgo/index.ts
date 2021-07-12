
import * as vscode from 'vscode';
const requireFunc = typeof __webpack_require__ === 'function' ? __non_webpack_require__ : require;
const PicGo = requireFunc('picgo');
const { config, uploader } = vscode.workspace.getConfiguration('img-online-uploader');

const picgo = new PicGo();

picgo.setConfig({
  picBed: {
    uploader,
    [uploader]: config
  },
});

vscode.window.withProgress({
  location: vscode.ProgressLocation.Notification,
  title: `图片上传中...`,
  cancellable: false
}, async (progress) => {

  return new Promise<void>(res => {
    const uploadProgress = (_progress: any) => {
      progress.report({ increment:  _progress});
      if (_progress === 100) {
        picgo.off('uploadProgress', uploadProgress);
        res();
      }
    };

    picgo.on('uploadProgress', uploadProgress);
  
    picgo.on('failed', (ctx: any) => {
      vscode.window.showErrorMessage(ctx);
    });
  });
});


export default picgo;