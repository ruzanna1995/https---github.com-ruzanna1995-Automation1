describe('Handling dropdown in webdriverIO', async()=>{
    it('should be able to select value from dropdown', async()=>{
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
      let DropdownExample = await $("//select[@id='dropdown-class-example']")
      await DropdownExample.selectByVisibleText('Option2')
      await browser.pause(4000)
    })
})