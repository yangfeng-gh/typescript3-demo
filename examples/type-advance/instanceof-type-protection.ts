interface Padder {
  getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) { }
  getPaddingString() {
      return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString() {
      return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5 ?
      new SpaceRepeatingPadder(4) :
      new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  console.log(padder); // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  console.log(padder); // 类型细化为'StringPadder'
}
