# nw-runner


## Javascript Example
```
let nwRunner = require('./index.js')

let myRunner = new nwRunner({ version: 'v0.19.2', architecture: 'x64', type: 'sdk',  tmpFolder: './tmp',  platform: 'linux'  })

let myProcessPromise = myRunner.run('path/to/app', 'arg1', 'arg2' ...)

myProcessPromise.then((myProcess) => console.log(myProcess) )
```