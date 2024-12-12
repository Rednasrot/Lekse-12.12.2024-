const nickName = document.querySelector('#name');

const age = document.querySelector('#age');

const submitButton = document.querySelector('#submit-button');

const attackButton = document.querySelector('#attack-button');

/* = betyr å deklarere en variabel 
== betyr at to variabel er like men ikke i type
"22" == 22
=== betyr at to varialer er like også i type 22 === 22

> / < større eller mindre enn EKSEMPEL: "snø" < "juletre" gir true

18<==18 gir større eller lik

&& og å eller sjekker begge sider og begge må være true for å få true.
EKSEMPEL: "Stian" === "Stian" && 28 > 18 gir hele statement true.
|| er eller EKSEMPEL: nickName.value === "Per" || nickName.value === "Pål" gir true for ett av navnene */

submitButton.addEventListener('click', function () {
  //BANLIST

  if (nickName.value === 'Per' || nickName.value === 'Pål') {
    console.log('DU ER BANNED');
  } else if (nickName.value === 'Stian' && age.value >= 18) {
    console.log('VELKOMMEN VIP');
  } else if (age.value >= 18) {
    console.log('Velkommen in');
  } else {
    console.log('Ingen adgang');
  }
});

const parentElement = document.querySelector;

attackButton.addEventListener('click', function () {
  const crit = Math.floor(Math.random() * 3) + 1;
  const damage = Math.floor(Math.random() * 10) + 1;
  //adder tekst ved en funskjon
  const parentElement = document.querySelector('#main');

  if (crit === 1 || damage === 1) {
    const newElement = document.createElement('h3');
    newElement.textContent = 'YOU MISSED';
    parentElement.appendChild(newElement);
  } else if (crit === 3 || damage <= 10) {
    const newElement = document.createElement('h3');
    newElement.textContent =
      'CRITICAL HIT! You dealt!' + damage * 2 + ' DAMAGE!';
    parentElement.appendChild(newElement);
  } else {
    const newElement = document.createElement('h3');
    newElement.textContent = 'HIT! You dealt!: ' + damage + ' DAMAGE!';
    parentElement.appendChild(newElement);
  }
});
