const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//access those arguments as parameters
customEmitter.on('response', (name, id) => { // response- the name of the event, should be string. pass as a string and a call back function
    console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response', () => { // we can listen on the same event and do some other logical in call back function
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'john', 34)     //the name of event should match, should be string, can pass arguments