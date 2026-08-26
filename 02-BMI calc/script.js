const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const h = parseInt(document.querySelector('#height').value)
    const w = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } 
    if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`;
    } 
});