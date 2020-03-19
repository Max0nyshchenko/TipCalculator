const cost1 = document.querySelector('#cost');
const service1 = document.querySelector('.service');
const people1 = document.querySelector('.people');
const tip = document.querySelector('.tip');
const Btn = document.querySelector('.tip-btn');

const wrapper = document.querySelector('.wrapper');
const appWrapper = document.querySelector('.app-wrapper');
const set = document.querySelector('.set');
const set2 = document.querySelector('#set2');
const set3 = document.querySelector('#set3');

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
)
.fromTo(
    set,
    1.5,
    {
        height: '0%',
        width: '0%',
        opacity: 0
    },
    {
        height: '100%',
        width: '100%',
        opacity: 1,
        ease: Power2.easeInOut
    }
)
.fromTo(
    set2,
    1.5,
    {
        height: '0%',
        width: '0%',
        x: '650',
        opacity: 0
    },
    {
        height: '100%',
        width: '100%',
        x: '0',
        opacity: 1
    },
    '-=1.5'
)
.fromTo(
    set3,
    1.5,
    {
        height: '0%',
        width: '0%',
        y: '780',
        x: '600',
        opacity: 0
    },
    {
        height: '100%',
        width: '100%',
        y: '0',
        x: '0',
        opacity: 1
    },
    '-=1.5'
);