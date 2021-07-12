import * as vscode from 'vscode';


export const setHistory = async ({ imgUrl, type }: { imgUrl: string;type: string; }, ctx: vscode.ExtensionContext) => {
  const path = ctx.globalStorageUri;
  const fs = vscode.workspace.fs;
  console.log(path);
  await fs.createDirectory(path);
  
  // const whiteStream = fs.createWriteStream(storage_path, {
  //   flags: 'a'
  // });
  // whiteStream.write(`资源路径：${ imgUrl }    -${ type }:${ new Date().toLocaleString() }\r\n`);
};