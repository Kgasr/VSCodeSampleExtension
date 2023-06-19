import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('vscodesampleextension.helloWorld', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const startPosition = editor.selection.start;
    		const endPosition = editor.selection.end;
			const range = new vscode.Range(startPosition.line, startPosition.character, endPosition.line, endPosition.character);
			
			const editPromise = editor.edit(editBuilder => {
						editBuilder.replace(range,"Hello World from VSCodeSampleExtension!");
				});
			return editPromise;
		}
	});
}
// This method is called when your extension is deactivated
export function deactivate() {}
