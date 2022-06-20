describe("Interacting with elements", function(){
    it("Get text for element", () => {
        browser.url('/')
        let text = $("//*[@id='ui-id-1']").getText()
        console.log(text)
    })
})