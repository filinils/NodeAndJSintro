const gem = 'A mighty fine *gem*, shiny and all!!'
const dirt = 'Just dirt'

const spins = 100000

let stuartResult = ''
let greggResult = ''

let earth = []

const earthSpins = spins
const earthSpinWithChemicalReactionThatCreatesGem = Math.floor(
  Math.random() * spins
)

spinEarthInSpace()
someTimeLaterAFellowNamedGreggWantsToTryHisLuck()
hisDrunkFriendStuartAlsoWantsToTryHisLuck()
whoWon()

function whoWon() {
  console.log(stuartResult)
  console.log(greggResult)
}

function spinEarthInSpace() {
  for (let i = 0; i < earthSpins; i++) {
    if (i === earthSpinWithChemicalReactionThatCreatesGem) {
      earth.push(gem)
    } else {
      earth.push(dirt)
    }
  }
}

function someTimeLaterAFellowNamedGreggWantsToTryHisLuck() {
  let gemInHand = false
  let nextPlaceToDig = 0
  const greggStartedToDig = Date.now()
  while (!gemInHand) {
    gemInHand = digAt(nextPlaceToDig)
    if (!gemInHand) console.log(`Gregg found ${dirt} at ${nextPlaceToDig}`)
    if (!gemInHand) nextPlaceToDig++
  }

  greggResult = `Yes!!! Gregg found ${gem} at ${nextPlaceToDig} it took him ${
    (Date.now() - greggStartedToDig) / 1000
  }seconds`
}

function hisDrunkFriendStuartAlsoWantsToTryHisLuck() {
  let gemInHand = false
  let nextPlaceToDig = 0
  const stuartStartedToDig = Date.now()

  console.log('Stuart starts to dig-->' + stuartStartedToDig)
  while (!gemInHand) {
    gemInHand = digAt(nextPlaceToDig)
    if (!gemInHand) console.log(`Stuart found ${dirt} at ${nextPlaceToDig}`)
    if (!gemInHand) nextPlaceToDig = Math.floor(Math.random() * spins)
  }

  stuartResult = `Yes!!! Stuart found ${gem} at ${nextPlaceToDig} it took him ${
    (Date.now() - stuartStartedToDig) / 1000
  }seconds`
}

function digAt(spot) {
  return earth[spot] === gem ? true : false
}
