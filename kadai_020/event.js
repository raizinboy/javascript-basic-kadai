const btn = document.getElementById('btn');


btn.addEventListener('click' , () =>{
  const text = document.getElementById('text');
  if( text.textContent === 'ボタンをクリックしてください'){
    text.textContent = 'ボタンをクリックしました';
  }
  else { 
    text.textContent = 'ボタンをクリックしてください';
  }
})
