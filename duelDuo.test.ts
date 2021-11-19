
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    await driver.sleep (1000)
    expect(displayed).toBe(true)
})

test("choices appear after clicking draw", async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.sleep (2000)
    const choices = await driver.findElement(By.id('choices'))
    const shown = await choices.isDisplayed()
    expect(shown).toBe(true)
})

test ("added bots appear after clicking add bot", async () => {
    await driver.findElement(By.xpath("(//a[@className = 'bot-btn'])"))
    await driver.sleep (2000)
})