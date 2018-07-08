const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let megabytes,months,pool = 0, counter = 0
let usage = []

const calcPool = () => {
    for(let i = 0; i < months; i++){
        pool += megabytes - usage[i]
    }
}

rl.on('line', input => {
    if(!megabytes)
        megabytes = parseInt(input,10)
    else if(!months)
        months = parseInt(input,10)
    else{
        usage.push(parseInt(input,10))
        counter++
        if(counter === months){
            calcPool()
            console.log(pool + megabytes)
            rl.close()
        }
    }
})