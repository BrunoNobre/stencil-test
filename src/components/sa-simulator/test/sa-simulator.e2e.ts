import { newE2EPage } from '@stencil/core/testing';

describe('sa-simulator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sa-simulator></sa-simulator>');

    const element = await page.find('sa-simulator');
    expect(element).toHaveClass('hydrated');
  });
});
