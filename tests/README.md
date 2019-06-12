<p align="center">
<img src="https://raw.github.com/inland-empire-software-development/main/dev/assets/iesd-logo-black.svg?sanitize=true" width="50%"> 
</p>

<h1 align="center"> 
  Testing 
</h1>
 
<p align="center">
  Jest Testing Suite<br>Inland Empire Software Development (IESD) non-profit organization main site.
</p>

## **Getting started**
Jest will test all files under the `./tests` directory when running the default script `yarn run test`. 


## **Writing a Test**
To start writing your first test, you must create a test file under the `./tests` directory. The naming convention for tests in this project is `purpose.test.js`. This makes it easier to find specific collections of tests.

Jest is a powerful testing framework, to get started you just need the very basics. The code below is sample code to get you started writing simple tests. You will see three keywords that will be used throughout the whole project, `describe`,`test` and `expect`. 

```JavaScript
const sum = require('../src/utils/sample');

// sample test suite - (name, callback)
describe("sample tests", () => {
  // sample test (name, callback)
  test('sum should add all numbers', () => {
    // expected result 
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  // sample test
  test('sum should only add numbers', () => {
    // expected result
    expect(sum(1, 2, 3, 'g')).toBe(6);
  });
});
```

## **License**
This work is licensed under a GNU General Public License.
 