# one-euro-filter-js
One Euro Filter

This is the JavaScript version using class available on
https://cristal.univ-lille.fr/~casiez/1euro/.

I converted it to an ES module, added compilation to create a UMD version, and
uploaded it to npm. I also converted the test to a mocha test.
Credit for the filter goes to the original author Géry Casiez.

## Usage

Node.js
```javascript
const OneEuroFilter = require('@david18284/one-euro-filter').OneEuroFilter;
```

ES6
```javascript
import { OneEuroFilter, LowPassFilter } from '@david18284/one-euro-filter';
```
