describe('Scrolling method in WebdriverIO', async()=>{
    it("should be able to scroll", async()=>{
       await  browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
       let table = await $("//div[@class='tableFixHead']")
       await table.scrollIntoView()
    })
})
