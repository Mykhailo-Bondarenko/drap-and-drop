const input = document.querySelector('.main__input');
const button = document.querySelector('.main__button');
const result = document.querySelector('.main__result');

button.addEventListener('click', getValue);

function getValue() {
  const value = input.value;
  const array = value.split('');
  let innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    innerHTML += `<div class="value" draggable="true">${array[i]}</div>`;
    result.innerHTML = innerHTML;
  }

  const values = document.querySelectorAll('.value');
  let offsetX = null;
  let offsetY = null;
  let current;

  values.forEach(function (value) {
    value.addEventListener('dragstart', function (event) {
      current = this;
      offsetX = event.offsetX;
      offsetY = event.offsetY;
    })
    value.addEventListener('dragend', function (event) {
      current.style.position = 'absolute';
      current.style.top = (event.pageY - offsetY) + 'px';
      current.style.left = (event.pageX - offsetX) + 'px';
    });
    value.addEventListener('dragover', function (event) {
      if (event.target.className === 'value') {
        [value.style.top, value.style.left] = [current.style.top, current.style.left];
      }
    })
  })
}










