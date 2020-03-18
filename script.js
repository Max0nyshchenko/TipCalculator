const cost_input = document.querySelector('.cost');
const service_input = document.querySelector('.service');
const people_input = document.querySelector('.people');

const tip_btn = document.querySelector('#tip-btn');

tip_btn.addEventListener('click', calcTip);

function calcTip() {
    let cost = Number(cost_input.value);
    let service = Number(service_input.value) / 100;
    let people = Number(people_input.value);
    let tip = (cost * service) / people;
    let tipEl = document.querySelector('.tip');
    let peopleCount = people > 1 ? 'each' : '';

    tipEl.innerHTML = `$${tip.toFixed(2)} ${peopleCount}`;

}