# Array Devide

[![CircleCI](https://circleci.com/gh/kuniiskywalker/array-devide/tree/master.svg?style=svg)](https://circleci.com/gh/kuniiskywalker/array-devide/tree/master)

## Installation

```
npm install array-devide --save
```

## Usage

```javascript
var arrayDevide = require('array-devide')

arrayDevide([1, 2, 3, 4, 5, 6], 3)
//=> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

arrayDevide([1, 2, 3, 4, 5, 6, 7], 3)
//=> [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7 ] ]

arrayDevide([1, 2], 3)
//=> [ [ 1 ], [ 2 ] ]

```

## License

MIT

## Author

[@kuniiskywalker](https://twitter.com/kuniiskywalker)
