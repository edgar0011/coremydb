import fs from 'fs'
import path from 'path'
// const dataFile = new URL( 'data.txt', import.meta.url) 
const dataFile = path.resolve( __dirname, 'data.txt') 

const reader = fs.createReadStream(dataFile, (err, buffer) => {
    console.log('file read: err', err)
    console.log('file read: buffer ', buffer)
})

fs.readFile(dataFile, (err, buffer) => {
    console.log('file read: err', err)
    console.log('file read: buffer ', buffer)
})

export default function() {}