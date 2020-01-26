const path = require("path");
const fs = require("fs");
const $ = require("jquery");

global.$ = $;

// eslint-disable-next-line no-undef
describe("items.js", () => {
    // eslint-disable-next-line no-undef
    beforeEach(async () => {
        const html = fs.readFileSync(path.resolve(__dirname, "server.html"));
        document.body.innerHTML = html;

        require("./items.js");
        document.dispatchEvent(new Event("DOMContentLoaded"));

        // 初期化を待つ
        await new Promise(resolve => setTimeout(resolve, 100));
    });

    // eslint-disable-next-line no-undef
    test("金額が計算される", async () => {
        document.querySelector(".price").value = 100;
        document.querySelector(".quantity").value = 200;
        document.querySelector(".quantity").dispatchEvent(new Event("input"));

        // eslint-disable-next-line no-undef
        expect(document.querySelector(".total").textContent).toBe("20000");
    });
});
