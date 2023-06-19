"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('vscodesampleextension.helloWorld', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const startPosition = editor.selection.start;
            const endPosition = editor.selection.end;
            const range = new vscode.Range(startPosition.line, startPosition.character, endPosition.line, endPosition.character);
            const editPromise = editor.edit(editBuilder => {
                editBuilder.replace(range, "Hello World from VSCodeSampleExtension!");
            });
            return editPromise;
        }
    });
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map