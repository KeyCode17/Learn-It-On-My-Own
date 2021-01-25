import {default as f} from './moduleB.js' // with alias
import fname from './moduleB.js' // without alias

console.log(`${f} with alias`)
console.log(`${fname} without alias`)