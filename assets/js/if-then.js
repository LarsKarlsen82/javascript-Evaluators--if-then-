
// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B.

if (A == B) {
    console.log('statement true!');
} else {
    console.info('Not true');
}


//opgave 2: skrive en If then statement der vurderer om A er større end B.

if (A > B) {
    console.info('Statement true!');
} else {
    console.info('statement not true!' );
}


//opgave 3: Skriv en If then statement der vurderer om A er mindre end eller lig med B

if (A <= B)  {
console.info('Statement true!');
} else {
    console.info('Statement not true!' );
}


//opgave 4: Skriv en If then statement der bliver FALSE når du sammenligner B og C.

if (!(B === C) ) {
    console.info('Har ikke lige værdi');
}



//opgave 5: Skriv en If then statement der bliver TRUE når du sammenligner B og C.

if (!(B > C)) {
    console.info('Number vs string!')
}


//opgave 6: Skriv en If then statement der sammenligner B = C og E = A hvis B=C skal den blive TRUE. 

if ((B == C) && (E==A) &&(B==C)) {
    console.info('TRUE');
} else{
    console.info("FALSE");
}