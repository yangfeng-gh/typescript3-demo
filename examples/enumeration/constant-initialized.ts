function getSomeValue() {
  return 1
}

enum E {
  A = getSomeValue(),
  B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
}