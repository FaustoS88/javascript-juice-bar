// Time constants for different juices (in minutes)
const JUICE_TIMES = {
  'Pure Strawberry Joy': 0.5,
  'Energizer': 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5
};

const DEFAULT_TIME = 2.5;

const LIME_WEDGES = {
  small: 6,
  medium: 8,
  large: 10
};

function timeToMixJuice(name) {
  return JUICE_TIMES[name] || DEFAULT_TIME;
}

function limesToCut(wedgesNeeded, limes) {
  let wedgesCount = 0;
  let limesUsed = 0;
  
  for (const lime of limes) {
    if (wedgesCount >= wedgesNeeded) break;
    wedgesCount += LIME_WEDGES[lime];
    limesUsed++;
  }
  
  return limesUsed;
}

function remainingOrders(timeLeft, orders) {
  let timeSpent = 0;
  let i = 0;
  
  while (i < orders.length && timeSpent < timeLeft) {
    timeSpent += timeToMixJuice(orders[i]);
    i++;
  }
  
  return orders.slice(i);
}

module.exports = {
  timeToMixJuice,
  limesToCut,
  remainingOrders
};