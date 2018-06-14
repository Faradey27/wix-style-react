jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

describe('Check migration script', () => {
  it('check general transformation for external projects', () => {
    defineTest(__dirname, 'index', null, 'generalTransform');
  });

  it('check deep import transformation for external projects', () => {
    process.env.MIGRATION = 'wix-style-react';
    defineTest(__dirname, 'index', null, 'deepImport');
    process.env.MIGRATION = '';
  });

  it('check wsr transformation', () => {
    process.env.MIGRATION = 'wix-style-react';
    defineTest(__dirname, 'index', null, 'wsrTransform');
    process.env.MIGRATION = '';
  });
});

