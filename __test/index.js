import { Selector } from 'testcafe';

fixture `Getting Start`.page `http://localhost:9000`;

test(`My first test`, async t => {
  await t
    .typeText('#title', 'Sample TestCafe')
    .typeText('.input', 'input text sample.')
    .click('#button');
});
