import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://apply.homage.sg/');
 
  await page.locator('text=First NameFirst Name >> input[type="text"]').click();

  await page.locator('text=First NameFirst Name >> input[type="text"]').fill('TesrtDemo');
 
  await page.locator('text=First NameFirst Name >> input[type="text"]').press('Tab');
  
  await page.locator('text=Last NameLast Name >> input[type="text"]').fill('Auttro');

  await page.locator('input[type="email"]').click();

  await page.locator('input[type="email"]').fill('testautorrymation@gmail.com');
  
  await page.locator('[placeholder="\\+1 \\(702\\) 123-4567"]').click();
  
  await page.locator('input[name="phone"]').fill('+65 8899-8840');
  
  //await page.locator('[placeholder="DD\\/MM\\/YYYY"]').click();
 
  await page.locator('[placeholder="DD\\/MM\\/YYYY"]').fill('28/08/1995_');
 
  await page.locator('div[id="nationality"]').click();
  
  await page.locator('text=Foreigner').click();

  await page.locator('input[role="combobox"]').click();

  await page.locator('input[role="combobox"]').fill('ind');

  await page.locator('text=India').click();
 
  await page.locator('[aria-label="Open"]').click();

  await page.locator('input[role="combobox"]').click();
 
  await page.locator('text=AndorraUnited Arab EmiratesAfghanistanAntigua and BarbudaAlbaniaArmeniaAngolaArg').click();

  await page.locator('text=No').first().click();
 
  await page.locator('text=Yes').first().click();
 
  await page.locator('text=No').first().click();
 
  await page.locator('button:has-text("Caregiver*availabe for Home Care, Facility-Based Care and Interim Care Services")').click();
  
  await page.locator('button:has-text("Home CarePersonal care provided in the individual home where the client is livin")').click();
 
  await page.locator('button:has-text("Interim Care ServicesPersonal care for patients who are medically fit for discha")').click();
  
  await page.locator('button:has-text("Full-TimeWork full-time at Homage or at one of our hospitals or community health")').click();
 
  await page.locator('text=No').nth(2).click();

  
  await page.locator('[placeholder="Referral Code \\(optional\\)"]').fill('RFTGY456');

  await page.locator('text=Select One').click();
  //await page.locator('div[role="button"]:has-text("Select One")').click();
  await page.locator('li[data-value="Social media (Facebook, Instagram)"]').click();
 
  await page.locator('.h > i').click();
  await page.locator('text=Submit Application').click();
  await page.locator('text=Your application has been submitted!').click();
  
  await page.locator('text=Thank you for your interest in joining Homage. We will get back to you with the ').click();
});