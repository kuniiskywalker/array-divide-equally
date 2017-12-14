# Array Divide

[![CircleCI](https://circleci.com/gh/kuniiskywalker/array-divide/tree/master.svg?style=svg)](https://circleci.com/gh/kuniiskywalker/array-divide/tree/master)

## Installation

```
npm install array-divide --save
```

## Usage

```javascript
var divide = require('array-divide')

arrayDevide([1, 2, 3, 4, 5, 6], 3)
//=> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

arrayDevide([1, 2, 3, 4, 5, 6, 7], 3)
//=> [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7 ] ]

arrayDevide([1, 2], 3)
//=> [ [ 1 ], [ 2 ] ]

```

### Methods

* **divide(array)** Divided Array

## License

MIT

## Author

[@kuniiskywalker](https://twitter.com/kuniiskywalker)
