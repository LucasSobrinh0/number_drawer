function drawNumbers() {
  const min = parseInt(document.getElementById('minNumber').value, 10);
  const max = parseInt(document.getElementById('maxNumber').value, 10);
  const count = parseInt(document.getElementById('count').value, 10);
  const result = [];

  if (min >= max) {
      alert('The start number must be less than the end number.');
      return;
  }

  while (result.length < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!result.includes(randomNumber)) {  // ensures there are no duplicate numbers
          result.push(randomNumber);
      }
  }

  document.getElementById('output').innerHTML = result.join(', ');
}
