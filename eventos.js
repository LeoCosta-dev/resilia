document.getElementById('home').addEventListener('click', ()=>{
    location.replace('index.html')
})
document.getElementById('filmes').addEventListener('click', ()=>{
    location.replace('pesquisa.html')
})
document.getElementById('assine').addEventListener('click', ()=>{
    location.replace('assineja.html')
})
document.getElementById('contato').addEventListener('click', ()=>{
    location.replace('contato.html')
})
document.querySelector('.logo').addEventListener('click', ()=>{
    location.replace('index.html')
})
document.querySelector('#login').addEventListener('click', ()=>{
    document.querySelector('.ocontainer').style.display = 'flex'
})
document.querySelector('#redirecionar').addEventListener('click', ()=>{
    location.replace('pesquisa.html')
})