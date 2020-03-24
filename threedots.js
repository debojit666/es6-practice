const ages = [11,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [25, 36, 22, 29];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges);
console.log(allAges2);

const business = 650;
const minister = 548;
const sochib = 554;
const takaPoysha = [650, 548, 554];
const maximum = Math.max(business, minister, sochib);
const maximum2 = Math.max(...takaPoysha);
console.log(maximum);
console.log(maximum2);

