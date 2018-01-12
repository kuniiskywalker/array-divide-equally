# Array Divide Equally

[![CircleCI](https://circleci.com/gh/kuniiskywalker/array-divide-equally/tree/master.svg?style=svg)](https://circleci.com/gh/kuniiskywalker/array-divide-equally/tree/master)

## Installation

```
npm install array-divide-equally --save
```

## Usage

```javascript
var divideEqually = require('array-divide-equally')

divideEqually([1, 2, 3, 4, 5, 6], 3)
//=> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

divideEqually([1, 2, 3, 4, 5, 6, 7], 3)
//=> [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7 ] ]

divideEqually([1, 2], 3)
//=> [ [ 1 ], [ 2 ] ]

```

### Methods

* **divideEqually(array)** Divided Array

## License

MIT

## Author

[@kuniiskywalker](https://twitter.com/kuniiskywalker)
