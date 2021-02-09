const args = process.argv.slice(2)

for (const time of args) {
  if(time > 0) {
    setTimeout (() => process.stdout.write('\x07'), time * 1000);
  }
}


//Note to self Beep doesn't sound in vscode terminal