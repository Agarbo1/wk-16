function stretch(timeLeft) {
  if (timeLeft >= 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done stretching')
      resolve(timeLeft - 1000)
    }, 1000)
  })
} else throw new Error("Error: you don't have enough time to stretch, fool")
}

function runOnTreadmill(timeLeft) {
  if (timeLeft >= 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done running on treadmill')
      resolve(timeLeft - 500)
    }, 500)
  })
} else throw new Error("Error: you don't have enough time to run on a treadmill, fool")
}

function liftWeights(timeLeft) {
  if (timeLeft >= 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('done lifting weights')
      resolve(timeLeft - 2000)
    }, 2000)
  })
}else throw new Error("Error: you don't have enough time to lift weights, fool")
}

function workout(totalTime) {
  stretch(totalTime)
  .then(runOnTreadmill)
  .then(liftWeights)
  .then(() => console.log('done working out'))
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout(3500);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
