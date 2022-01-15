const fs = require('fs');

const txtToJson = {
    start: async function (page) {

        let regex = /\s/gm
        let fileContent = fs.readFileSync("validProxy.txt", "utf8");

        let arr = await fileContent.split(regex)

        let formatArr = []
        for (const el of arr) {
            if(el !== '') {
                formatArr.push(el)
            }
        }

        console.log(formatArr)
    }
}


txtToJson.start()