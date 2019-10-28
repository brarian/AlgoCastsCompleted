function isValid(c) {
  const oTC = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const open = new Set(['(', '{', '[']);
  const close = new Set([')', '}', ']']);

  const openersStack = [];

  for (i of c) {
    const char = i;

    if (open.has(i)) {
      openersStack.push(i);
    } else if (close.has(i)) {
      if (!openersStack.length) {
        return false;
      }

      const lastUnclosed = openersStack.pop();

      if (oTC[lastUnclosed] !== i) {
        return false;
      }
    }
  }
  return openersStack.length === 0;
}
