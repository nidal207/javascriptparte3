// Função que é chamada ao enviar o formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    // Obtendo os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exibe uma mensagem de sucesso ou erro
    if (name && email && message) {
        document.getElementById('response-message').textContent = `Obrigado pela sua mensagem, ${name}! Entraremos em contato em breve.`;
        document.getElementById('response-message').style.color = 'green';
    } else {
        document.getElementById('response-message').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('response-message').style.color = 'red';
    }

    // Limpa o formulário
    document.getElementById('contact-form').reset();
});
