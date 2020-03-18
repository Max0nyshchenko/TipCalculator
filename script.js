const cost1 = document.querySelector('#cost');
const service1 = document.querySelector('.service');
const people1 = document.querySelector('.people');
const tip = document.querySelector('.tip');
const Btn = document.querySelector('.tip-btn');

Btn.addEventListener('click', () => {
    let cost = Number(cost1.value);
    let service = Number(service1.value);
    let people = Number(people1.value);
    let peopleCount = people > 1 ? 'each' : '';
    let tipS = (cost * (service / 100)) / people;

    tip.innerHTML = `$${tipS.toFixed(2)} ${peopleCount}`;
})
