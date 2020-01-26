const path = require("path");
describe("スナップショットテスト",() => {
    beforeEach(async() => {
        await page.goto("file://" + path.resolve(__dirname,"../hoge.html"));
    });

    it("スナップショットテスト",async() => {
    await page.waitForSelector("#title",{visible:true});
    expect(await page.content()).toMatchSnapshot();
    });
});
