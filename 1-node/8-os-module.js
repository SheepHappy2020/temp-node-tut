//build-in os module
const os = require('os')   //same as const {} = require('os') {里面是想要用到的function}

//info about current user
const user = os.userInfo()
//console.log(user)

// method returns the system uptime in seconds
//console.log(`The System Uptime is ${os.uptime} secondes`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),     //total memory
    freeMem: os.freemem(),       // free memory
}

console.log(currentOS)