import { test, expect } from '@playwright/test'

test('Login', async({ page })=>   {

await page.goto('https://magento.softwaretestingboard.com/customer/account/login')
await expect(page).toHaveTitle('Customer Login') 
await page.click('id=email')
await page.locator('id=email').fill('Cathy.hettison@gmail.com')
await page.click('id=pass')
await page.locator('id=pass').nth(0).fill('Passis@123')
await page.getByRole('button',{name: 'Sign In'}).click()
await page.getByRole('menuitem', { name: 'Gear' }).hover()
await page.waitForSelector('text=Bags', { state: 'visible' })
await page.getByRole('menuitem', { name: 'Bags' }).click()
})
