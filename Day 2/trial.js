function xyz(f1) {
  for (var x = 1; x < 10; x++) {
    console.log(f1(x));
  }
}

xyz((n) => {
  return n * n * n;
});
