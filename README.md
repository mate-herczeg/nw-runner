# nw-runner

for nwDownloaderConfig see [https://github.com/mate-herczeg/nw-downloader](https://github.com/mate-herczeg/nw-downloader)

## Javascript Example
```
let nwRunner = require('./index.js')

let myRunner = new nwRunner('path/to/app', nwDownloaderConfig)

let myProcessPromise = myRunner.run('arg1', 'arg2' ...)

myProcessPromise.then((myProcess) => console.log(myProcess) )
```