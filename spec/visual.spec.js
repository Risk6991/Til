const path = require("path");
//Jestの検証用メソッドの拡張
const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });

describe("ビジュアルテスト",() => {
    beforeEach(async () => {
        await page.goto("file://" + path.resolve(__dirname,"../hoge.html"));
    });

    it("HTML/CSSを含めた見た目が正しい",async () => {
        await page.waitForSelector("#title", { visible:true });
        //画像の撮影と比較
        expect(await page.screenshot()).toMatchImageSnapshot();
    });
});
