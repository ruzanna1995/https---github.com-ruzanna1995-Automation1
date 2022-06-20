describe("Radio Button Automation",async()=>{
    it("Should be able to select Radio button", async()=>{
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        let radiobtn1 = await $("//*[@for='radio1']")
        await radiobtn1.click()
        await browser.pause(10000)
    })
    it("Should be able to select Checkbox", async()=>{
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        let checkbox1 = await $("//*[@for='bmw']")
        await checkbox1.click()
        await browser.pause(10000)
    })

})
