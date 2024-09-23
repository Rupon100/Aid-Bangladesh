//scroll sticky style added for header
window.addEventListener('scroll', ()=>{
    const header = document.getElementById('scrollHeader');
    const nav = document.getElementById('navScroll');
    if(window.scrollY > 50){
        header.classList.add('bg-gray/70', 'backdrop-blur-xl')
        //nav.classList.remove('bg-stone-100');
    } 
})

//toggle for donation and history
document.getElementById('history-btn').addEventListener('click', ()=> {
    document.getElementById('donation-post').classList.toggle('hidden');
    document.getElementById('history-post').classList.toggle('hidden');

    document.getElementById('history-btn').classList.toggle('bg-lime-300');
    document.getElementById('donation-btn').classList.toggle('bg-lime-300');
});
document.getElementById('donation-btn').addEventListener('click', ()=> {
    document.getElementById('history-post').classList.toggle('hidden');
    document.getElementById('donation-post').classList.toggle('hidden');

    document.getElementById('history-btn').classList.toggle('bg-lime-300');
    document.getElementById('donation-btn').classList.toggle('bg-lime-300');
});















//function for donate amount
function donateValue(id){
    const value = document.getElementById(id).textContent;
    return parseFloat(value);
}
const mainBalance = donateValue('main-balance');
const noakhaliDonate = donateValue('noakhali-donate');
const feniDonate = donateValue('feni-donate');
const studentAid = donateValue('student-aid');

//function for input
function inputValue(id){
    const input = document.getElementById(id).value;
    return parseFloat(input);
}
 

// const noakhaliBtn = document.getElementById('noakhali-btn');
// noakhaliBtn.addEventListener('click', ()=> {
//     const noakhaliInput = inputValue('noakhali-input');
//     const mainBalance = donateValue('main-balance');
//     const noakhaliDonate = donateValue('noakhali-donate');
//     const ttlBalance = noakhaliInput + mainBalance;

//     if(isNaN(noakhaliInput)){
//         alert('Invalid Input!');
//         document.getElementById('noakhali-input').value = '';
//         return;
//     }else if(noakhaliInput <= 0){
//         alert('Invalid Input!');
//         document.getElementById('noakhali-input').value = '';
//         return;
//     }
//     else{
//         const ttlForBox = noakhaliInput + noakhaliDonate;
//         document.getElementById('noakhali-donate').innerText = ttlForBox;
//         document.getElementById('main-balance').innerText = ttlBalance;
//         document.getElementById('noakhali-input').value = '';

//         const modal = document.getElementById('modal');
//         noakhaliBtn.onclick = () => {
//             modal.showModal();
//         }
//     }
    
// });

//const noakhaliBtn = document.getElementById('noakhali-btn');
 

//function for input
function inputCalculate(inputId, mainbalanceId, donateId, place){
    const input = inputValue(inputId);
    const mainBalance = donateValue(mainbalanceId);
    const donate = donateValue(donateId);
    if(isNaN(input)){
        alert('Invalid Input!');
        document.getElementById(inputId).value = '';
        return;
    }else if(input <= 0){
        alert('Invalid Input!');
        document.getElementById(inputId).value = '';
        return;
    }else {
        const ttlDoante = input + donate;
        const updateBalance = mainBalance + input;
        document.getElementById(donateId).innerText = ttlDoante;
        document.getElementById(mainbalanceId).innerText = updateBalance;
        document.getElementById(inputId).value = '';
    }

    const floodPlace = document.getElementById(place).innerText; 
    const date = new Date();
    const historyBox = document.getElementById('history-post');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="border rounded-lg p-6">
            <h1 class="text-xl font font-semibold py-1">${input} Taka is Donated for ${floodPlace}</h1>
            <p>Date: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
        </div>
    `;
    historyBox.appendChild(div);
   
}
