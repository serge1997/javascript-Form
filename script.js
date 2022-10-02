
let btn = document.querySelector('.btn')
btn.addEventListener('click', (formDina)=>{
    //creat a container 
    let conT = document.createElement('DIV')
    conT.setAttribute('id', 'container')
    document.body.appendChild(conT)

    //creat a form
    let creatForm = document.createElement('FORM')
    creatForm.setAttribute('id', 'myform')
    document.querySelector('#container').appendChild(creatForm)

    //input name element
    let nome = document.createElement('INPUT')
    nome.setAttribute('type', 'text')
    nome.setAttribute('id', 'nome')
    nome.setAttribute('placeholder', 'Nome')
    document.querySelector('#myform').appendChild(nome)

    //input mail element
    let mail = document.createElement('INPUT')
    mail.setAttribute('type', 'text')
    mail.setAttribute('id', 'mail')
    mail.setAttribute('placeholder', 'Email')
    document.querySelector('#myform').appendChild(mail)

    //input date element
    let lab = document.createElement('label')
    lab.innerHTML = "Birth:"
    document.querySelector('#myform').appendChild(lab)
    let dat = document.createElement('INPUT')
    dat.setAttribute('type', 'date')
    dat.setAttribute('id', 'data')
    document.querySelector('#myform').appendChild(dat)

    //input password element
    let senha = document.createElement('INPUT')
    senha.setAttribute('type', 'password')
    senha.setAttribute('placeholder', 'Senha')
    senha.setAttribute('id', 'senha')
    document.querySelector('#myform').appendChild(senha)

    //button submit
    let sub = document.createElement('BUTTON')
    sub.setAttribute('type', 'submit')
    sub.innerHTML = "Enviar"
    sub.setAttribute('id', 'enviar')
    document.querySelector('#myform').appendChild(sub)
})
btn.addEventListener('click', () =>{
    btn.setAttribute('disabled', '');
})