const path = require("path");
const fs = require("fs");
const $ = require("jquery");

global.$ = $;

describe("items.js",() => {
    beforeEach(async() => {
        const html = fs.readFileSync(path.resolve(__dirname,"server.html"));
        document.body.innerHTML = html

        require("./items.js");
        document.dispatchEvent(new Event("DOMContentLoaded"));

        //初期化を待つ
        await new Promise(resolve => setTimeout(resolve,100));
    });

    test("金額が計算される",async () => {
        document.querySelector(".price").value = 100;
        document.querySelector(".quantity").value = 200;
        document.querySelector(".quantity").dispatchEvent(new Event("input"));

        expect(document.querySelector(".total").textContent).toBe("20000")
    });

});
