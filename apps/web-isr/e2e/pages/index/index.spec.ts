import { test, expect } from '@playwright/test'
import axios from 'axios'

test.describe('Home page', () => {
  test('Restaurant card click navigates to details page', async ({ page }) => {
    await page.goto('http://localhost:3003/')
    const { data: firstRestaurant } = await axios.get('http://localhost:3003/api/restaurants/1')
    await page.getByTestId(firstRestaurant.name).click()
    await expect(page).toHaveURL(/.*1/)
  })
})
