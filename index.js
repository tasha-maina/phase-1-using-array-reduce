const batteryBatches = [
  { batteries: 4 },
  { batteries: 5 },
  { batteries: 3 },
  { batteries: 4 },
  { batteries: 4 },
  { batteries: 6 },
  { batteries: 5 },
];

const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch.batteries;
}, 0);
