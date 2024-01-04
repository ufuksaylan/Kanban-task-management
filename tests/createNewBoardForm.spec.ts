import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('heading', { name: '+ Create New Board' }).click();
  await page.getByPlaceholder('e.g. Web Design').click();
  await page.getByPlaceholder('e.g. Web Design').press('CapsLock');
  await page.getByPlaceholder('e.g. Web Design').fill('H');
  await page.getByPlaceholder('e.g. Web Design').press('CapsLock');
  await page.getByPlaceholder('e.g. Web Design').fill('Hello ');
  await page.getByPlaceholder('e.g. Web Design').press('CapsLock');
  await page.getByPlaceholder('e.g. Web Design').fill('Hello W');
  await page.getByPlaceholder('e.g. Web Design').press('CapsLock');
  await page.getByPlaceholder('e.g. Web Design').fill('Hello World');
  await page.getByText('All boards (0)+ Create New Board').click();
  await page.getByRole('heading', { name: '+ Create New Board' }).click();
  await page.getByPlaceholder('e.g. Web Design').click();
  await page.getByPlaceholder('e.g. Web Design').fill('gasdg');
  await page.getByRole('button', { name: '+ Add New Column' }).click();
  await page.getByPlaceholder('e.g. Todo').nth(2).click();
  await page.getByPlaceholder('e.g. Todo').nth(2).fill('gdsfsdf');
  await page.getByRole('button', { name: 'Save Changes' }).click();

  await expect(page.getByTestId('add-section-row')).toContainText(
    'All boards (1)gasdg+ Create New Board'
  );
});
