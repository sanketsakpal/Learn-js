const form = document.querySelector('form');
// this use case will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit' , function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
if (height === '' || height < 0 || height || isNaN(height)) {
    results.innerHTML = `please give a valid ${height}`;
}else if (weight === '' || weight < 0 || weight || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
}else {
  const bmi =   (weight / (height *height)/10000).toFixed(2);
  // show result 
  results.innerHTML = `<span>${bmi}</span>`;

}
})