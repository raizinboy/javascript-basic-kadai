const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    if(text.textContent === 'ボタンをクリックしてください'){
    setTimeout( () => {
      text.textContent = 'ボタンがクリックされました';
    }, 2000)};
  else {
    text.textContent = 'ボタンをクリックしてください' ;
  }
});