import { useViewer } from './viewer';
import { useUploader } from './uploader';
import * as vscode from 'vscode';


export const useCommands = (ctx: vscode.ExtensionContext) => {
  return [useViewer(ctx), useUploader(ctx)];
};