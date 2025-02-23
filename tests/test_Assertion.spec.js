import { test, expect } from '@playwright/test'

test('Login', async({ page })=>   {

await page.goto('https://practicetestautomation.com/practice-test-login/')
//await expect(page).toHaveTitle('Test login') 
await expect(page.getByText('Test login')).toContainText('Test login')
await page.click('id=username')
await page.locator('id=username').fill('student')
await page.click('id=password')
await page.locator('id=password').fill('Password123')
await page.locator('#submit').click()
//await page.getByRole('menuitem', { name: 'Bags' }).click();
})
