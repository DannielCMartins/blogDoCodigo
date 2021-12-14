const nodemailer = require('nodemailer');

class Email {
  async enviaEmail(usuario){
    const contaTeste = await nodemailer.createTestAccount();
    const transportador = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      auth: contaTeste,
    });
  
    const info = await transportador.sendMail(this);
    const emailLink = nodemailer.getTestMessageUrl(info);
    console.log(`url: ${emailLink}`);
  }
}

class EmailVerficacao extends Email {
  constructor(usuario, endereco){
    super();
    this.from = '"Blog do Codigo" <noreply@blogdocodigo.com.br>',
    this.to = usuario.email,
    this.subject = 'Verificação de email',
    this.text = `Olá, obrigado por se cadastrar,
       pra você poder ter acesso total click no lin abaixo: ${endereco}`,
    this.html = `<h1>Olá</h1>, obrigado por se cadastrar,
    pra você poder ter acesso total click no lin abaixo: <a href="${endereco}"> ${endereco}</a>`   
  }
}

module.exports = { EmailVerficacao };
