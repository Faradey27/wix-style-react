import lowPriorityWarning from './../lowPriorityWarning';
const cachedConsoleWarn = global.console.warn;

describe('lowPriorityWarning', () => {
  beforeEach(() => {
    global.console.warn = jest.fn();
  });

  afterEach(() => {
    global.console.warn = cachedConsoleWarn;
  });

  it('should log warning in dev mode', () => {
    lowPriorityWarning('Some message');
    expect(global.console.warn).toBeCalledWith('Warning: Some message');
  });
});
