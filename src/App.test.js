import { waitFor } from '@testing-library/react';
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

test('renders learn react link', async () => {
  let counter = 0;
  setTimeout(() => counter = 1, 1);
  setTimeout(() => counter = 3, 1000);

  await waitFor(() => { expect(counter).toEqual(3) })
  expect(counter > 1).toEqual(true)
});
