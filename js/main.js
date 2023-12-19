document.getElementById('btn-enviar')
.addEventListener('click', () =>{
   
    const saudacoes = document.getElementById('saudacoes').value;
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
   // const genero = document.getElementById('genero').value;
   // const masculino = document.getElementById('masculino').value;
   // const feminino = document.getElementById('feminino').value;
   // const outro = document.getElementById('outro').value;
    const email = document.getElementById('email').value;
    const data_nascimento = document.getElementById('data_nascimento').value;
    const obs = document.getElementById('obs').value;
    const dataToSend = {
        saudacoes: saudacoes,
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        data_nascimento: data_nascimento,
        //genero: genero,
        obs: obs
    };
    alert(JSON.stringify(dataToSend));
});