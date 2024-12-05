# JavaScript Juice Bar

This project implements a solution for managing a juice bar, including functionality for:
- Calculating juice preparation times
- Optimizing lime cutting
- Managing remaining orders during shift changes

## Prerequisites

Before running this project, make sure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/FaustoS88/javascript-juice-bar.git
cd javascript-juice-bar
```

2. Install the required dependencies:
```bash
npm install
```

This will install:
- Jest: The testing framework used for unit tests

Without installing these dependencies, the tests will not run properly.

## Testing

To run the tests:
```bash
npm test
```

Make sure you've installed the dependencies first, otherwise you'll get a "jest: command not found" error.

## Functions

### timeToMixJuice(name)
Calculates the time needed to prepare a specific juice.

### limesToCut(wedgesNeeded, limes)
Calculates how many limes need to be cut to get the required number of wedges.

### remainingOrders(timeLeft, orders)
Determines which orders will remain unfinished at the end of a shift.

## Usage Example

```javascript
const { timeToMixJuice, limesToCut, remainingOrders } = require('./src/juiceBar');

// Calculate time for a specific juice
const time = timeToMixJuice('Tropical Island'); // Returns 3

// Calculate limes needed
const limes = limesToCut(25, ['small', 'small', 'large', 'medium']); // Returns 4

// Check remaining orders
const remaining = remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);
// Returns ['Green Garden']
```

## License

MIT