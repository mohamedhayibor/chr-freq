import test from 'ava'
import { characterCounter as freq } from './cli.js'


test('Should count the right number of characters', t => {
  let rightLen = Object.keys(freq('abc*8888@!')).length;

  t.is(rightLen, 7, 'Expected 7 characters.')
})

test('Should not ignore non-alphabitical characters', t => {
  let str = Object.keys(freq('$((#$#@))')).length;

  t.is(str, 5, 'Expected 5')
})

test('Should be able to retrieve the count for a specific character', t => {
  let testStringForA = freq('a breach of security. //. .&@!')['a'];
  let testStringForE = freq('a breach of security. //. .&@!')['e'];
  let testStringForI = freq('a breach of security. //. .&@!')['i'];

  t.is(testStringForA, 2, 'Expected 2');
  t.is(testStringForE, 2, 'Expected 2');
  t.is(testStringForI, 1, 'Expected 1');
})

test('Should ignore white spaces', t => {
  let rightLen = Object.keys(freq('a    ad&   ')).length;

  t.is(rightLen, 3, 'Expected 3')
})
