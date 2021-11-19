
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
    const choices = await driver.findElement(By.id('choices'))
    const shown = await choices.isDisplayed()
    expect(shown).toBe(true)
})

// review code

test ("added bots appear after clicking add bot", async () => {
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click();
    let playerDuo = await driver.findElement(By.id("player-duo"));
    const displayed = await playerDuo.isDisplayed();
    expect(displayed).toBe(true);
})

test("removed bot goes back to choices", async () => {
    await driver.findElement(By.id("draw")).click();
    await driver.sleep (1000);
    await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click();
    await driver.findElement(By.xpath('(//button[text()="Remove from Duo"])')).click();
    const returnedCard = await driver.findElement(By.xpath('(//div[@class="bot-card outline"][5])'));
    const displayed = await returnedCard.isDisplayed();
    expect(displayed).toBe(true);
})