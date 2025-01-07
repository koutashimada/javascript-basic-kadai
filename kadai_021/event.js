const startbtn = document.getElementById('btn');
const aftertext = document.getElementById('text');
startbtn.addEventListener(('click'),() =>{
    setTimeout(() =>{
        aftertext.textContent ='ボタンをクリックしました'
    },2000);
    
});