
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

class Magpie implements Bird {
  fly() {
    console.log('Magpie fly')
  }
  layEggs() {
    console.log('Magpie layEggs')
  }
}

function getSmallPet(): Fish | Bird {
  return new Magpie()
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

let pet = getSmallPet();
pet.layEggs();
// pet.fly(); // Property 'fly' does not exist on type 'Fish'.
// 'swim' 和 'fly' 调用都没有问题了
if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}