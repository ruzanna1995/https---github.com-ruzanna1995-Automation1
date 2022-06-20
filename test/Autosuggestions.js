describe('Autosuggestions',()=>{
    before(async () => {
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
    })
    it('Click on Suggestion Class Example', async() =>{
    
        let search = await $("//input[@placeholder='Type to Select Countries']")
        await search.setValue("Po")
        await browser.pause(4000)
        let allvalues = await $$("//ul[@id='ui-id-1']//li")
        for(let i = 0; i< allvalues.length, i++;)
        {
            console.log("Values from autogenerations", await allvalues[i].getText())
        }

    })
    it('Mouse hover on element', async() => {
        let mouseHover = await $("//button[@id='mousehover']")
        await mouseHover.scrollIntoView
        ;(await $("//button[@id='mousehover']")).moveT
    })
})