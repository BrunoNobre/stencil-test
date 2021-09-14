import { newSpecPage } from '@stencil/core/testing';
import { SaSimulator } from '../sa-simulator';

describe('sa-simulator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SaSimulator],
      html: `<sa-simulator></sa-simulator>`,
    });
    expect(page.root).toEqualHtml(`
      <sa-simulator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sa-simulator>
    `);
  });
});
