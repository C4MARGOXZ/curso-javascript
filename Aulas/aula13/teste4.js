let c = 0;
while (c < 15) {
  c++;

  if (c % 3 == 0 && c % 5 == 0) console.log("fizzbuzz");
  else if (c % 5 == 0) console.log("buzz");
  else if (c % 3 == 0) console.log("fizz");
  else console.log(c);
}
