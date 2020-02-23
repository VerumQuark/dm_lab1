'use strict';

const firstInput = document.getElementById( 'firstInput' );
const secondInput = document.getElementById( 'secondInput' );

const intersectionBut = document.getElementById( 'intersection' );
const unionBut = document.getElementById( 'union' );
const differenceBut = document.getElementById( 'difference' );
const symmetricDifferenceBut = document.getElementById( 'symmetricDifference' );


let firstSet = new Set();
let secondSet = new Set();

intersectionBut.onclick = intersectionFunc;
unionBut.onclick = unionFunc;
differenceBut.onclick = differenceFunc;
symmetricDifferenceBut.onclick = symmetricDifferenceFunc;

firstInput.onchange = handleFstChange;
secondInput.onchange = handleSndChange;

function intersectionFunc () {

  const intersectionSet = firstSet.filter( element => secondSet.includes( element ) ).sort();

  alert( intersectionSet );
}

function unionFunc () {

  const unionSet = [ ...new Set( [...firstSet, ...secondSet ] ) ].sort();

  alert( unionSet );
}

function differenceFunc () {

  const differenceSet = firstSet.filter( element => !secondSet.includes( element ) ).sort();

  alert( differenceSet );
}

function symmetricDifferenceFunc () {

  const tmpUnionSet = [ ...new Set( [...firstSet, ...secondSet ] ) ].sort();
  const tmpIntersectionSet = firstSet.filter( element => secondSet.includes( element ) );
  const symmetricDifferenceSet = tmpUnionSet.filter( element => !tmpIntersectionSet.includes( element ) )  ;

  alert( symmetricDifferenceSet );
}

function handleFstChange (e) {
  firstSet = e.target.value.split( ',' );
}

function handleSndChange (e) {
  secondSet = e.target.value.split( ',' );
}