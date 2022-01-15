const fs = require('fs');

let getData = {
    proxyId: '#zkzk',
    clickBtn: '#clickexport',
    page: null,
    init: async function (page) {
        this.page = page
    },
    getData: async function () {

        await this.page.click(`${this.clickBtn}`)
        let proxys = await this.page.evaluate(() => {
            let elem = document.querySelector(`#zkzk`).innerHTML;
            return elem
        });

        console.log(proxys)

        return proxys
    },
    transformData: async function (data) {
        let regex = /<br>/gm
        let formatData = data.replace(regex, ';');

        formatData = formatData + ';'

        console.log(formatData)
        return formatData
    },
    writeData: async function (data) {
        fs.appendFileSync("data.txt", data);
    },
    start: async function (page) {
        await this.init(page)
        let data = await this.getData()
        let formatData = await this.transformData(data)
        await this.writeData(formatData)
    }

}

module.exports = getData

