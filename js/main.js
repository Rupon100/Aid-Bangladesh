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