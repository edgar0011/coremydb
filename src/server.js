import util from 'util'
import { EventEmitter } from 'events'
import files from './files/index.js'

console.log('import.meta.url', import.meta.url)
console.log('util', util)
console.log('EventEmitter', EventEmitter)

console.log('declare eventBus')
const eventBus = new EventEmitter()

console.log('declare eventBus on event handler')
eventBus.on('data', (...rest) => {

    console.log('data handler:', rest)

})

console.log('emit event')
eventBus.emit('data', { message: ' hello ' })
console.log('emit event emitted')

console.log('eventBus eventNames', eventBus.eventNames())

// console.log('global', global)
// console.log('process', process)

const delayer = function() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('delayer end')
            resolve(666)
        }, 1000)
    })
}

const f = async function() {
    // const fff = await delayer()
    // return fff
    return await delayer()
}

f().then((result) =>  {

    console.log('result: ', result)
})

