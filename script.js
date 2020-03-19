const cost1 = document.querySelector('#cost');
const service1 = document.querySelector('.service');
const people1 = document.querySelector('.people');
const tip = document.querySelector('.tip');
const Btn = document.querySelector('.tip-btn');

const wrapper = document.querySelector('.wrapper');
const appWrapper = document.querySelector('.app-wrapper');

const tl = new TimelineMax();

Btn.addEventListener('click', () => {
    let cost = Number(cost1.value);
    let service = Number(service1.value);
    let people = Number(people1.value);
    let peopleCount = people > 1 ? 'each' : '';
    let tipS = (cost * (service / 100)) / people;

    tip.innerHTML = `$${tipS.toFixed(2)} ${peopleCount}`;
})


tl.fromTo(
    wrapper,
    1,
    {height: '0vh'},
    {height: '100vh',
    ease: Power2.easeInOut}
)
.fromTo(
    appWrapper,
    1.5,
    {
        opacity: 0,
        y: '50'
    },
    {
        opacity: 1,
        y: '0',
        ease: Power2.easeInOut
    }
)
.fromTo(
    Btn,
    1.5,
    {
        height: '0px',
    },
    {
        height: '100px',
        ease: Power2.easeInOut
    }
)
.fromTo(
    Btn,
    1,
    {
        fontSize: '0px'
    },
    {
        fontSize: '2rem'
    },
    '-=1'
);