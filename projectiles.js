//calculator
const CalculatorDirect = () => {
    document.querySelector('#calculator-id').classList.toggle('calculator');
    document.querySelector('#calculator-id').classList.toggle('visible-calculator'); 
};

// learn projectiles
const LearnProjectiles = () => {
    document.querySelector('.learnprojectiles').classList.toggle('hide');
}
    
// vx function
const HorizontalComponentOfVelocity = () => {
    const initialVelocityForHorizontalComponentOfVelocity = parseFloat(document.querySelector('#vxu').value);
    const angleForHorizontalComponentOfVelocity = parseFloat(document.querySelector('#vxangle').value);
    const angleForHorizontalComponentOfVelocityInRadian = angleForHorizontalComponentOfVelocity * (Math.PI  / 180);
    let result = (initialVelocityForHorizontalComponentOfVelocity * Math.cos(angleForHorizontalComponentOfVelocityInRadian)).toFixed(4);
    result.textContent = '';
    document.querySelector('#vxbutton').textContent = result; 
};
   
// vy function
const VerticalComponentOfVelocity = () =>{
    const initialVelocityForVerticalComponentOfVelocity = parseFloat(document.querySelector('#vyu').value);
    const angleForVerticalComponentOfVelocity = parseFloat(document.querySelector('#vyangle').value);
    const angleForVerticalComponentOfVelocityInRadian = angleForVerticalComponentOfVelocity * (Math.PI  / 180);
    const gravityForVerticalComponentOfVelocity = parseFloat(document.querySelector('#vyg').value);
    const timeForVerticalComponentOfVelocity= parseFloat(document.querySelector('#vyt').value);
    let result = ((initialVelocityForVerticalComponentOfVelocity * Math.sin(angleForVerticalComponentOfVelocityInRadian)) - (gravityForVerticalComponentOfVelocity * timeForVerticalComponentOfVelocity)).toFixed(4);
    result.textContent = '';
    document.querySelector('#vybutton').textContent = result; 
};

// sx function
const HorizontalDistance = () => {
    const initialVelocityForHorizontalDistance = parseFloat(document.querySelector('#sxu').value);
    const timeForHorizontalDistance = parseFloat(document.querySelector('#sxt').value);
    const angleForHorizontalDistance = parseFloat(document.querySelector('#sxangle').value);
    const angleForHorizontalDistanceInRadian = angleForHorizontalDistance * (Math.PI  / 180);
    let result = (initialVelocityForHorizontalDistance * timeForHorizontalDistance * Math.cos(angleForHorizontalDistanceInRadian)).toFixed(4);
    result.textContent = '';
    document.querySelector('#sxbutton').textContent = result; 
};

// sy function
const VerticalDistance = () => {
    const initialVelocityForVericalDistance = parseFloat(document.querySelector('#syu').value);
    const angleForVerticalDistance = parseFloat(document.querySelector('#syangle').value);
    const angleForVerticalDistanceInRadian = angleForVerticalDistance * (Math.PI  / 180);
    const graviyForVerticalDistance = parseFloat(document.querySelector('#syg').value);
    const timeForVerticalDistance = parseFloat(document.querySelector('#syt').value);
    let result = ((initialVelocityForVericalDistance * Math.sin(angleForVerticalDistanceInRadian)) - ((graviyForVerticalDistance * (timeForVerticalDistance ** 2)) / 2)).toFixed(4);
    result.textContent = '';
    document.querySelector('#sybutton').textContent = result;

};

// h function
const GreatestHeightReached = () => {
    const initialVelocityForGreatestHeightReached = parseFloat(document.querySelector('#hu').value);
    const angleForGreatestHeightReached = parseFloat(document.querySelector('#hangle').value);
    const angleForGreatestHeightReachedInRadian = angleForGreatestHeightReached * (Math.PI  / 180);
    const gravityForGreatestHeightReached = parseFloat(document.querySelector('#hg').value);
    let result = (((initialVelocityForGreatestHeightReached**2) * (Math.sin(angleForGreatestHeightReachedInRadian))**2) / (2*gravityForGreatestHeightReached)).toFixed(4);
    result.textContent = '';
    document.querySelector('#hbutton').textContent = result; 
};

// t function
const TimeTakenToReachTheGreatestHeight = () => {
    const initialVelocityForTimeTakenToReachTheGreatestHeight = parseFloat(document.querySelector('#tu').value);
    const angleForTimeTakenToReachTheGreatestHeight = parseFloat(document.querySelector('#tangle').value);
    const angleForTimeTakenToReachTheGreatestHeightInRadian = angleForTimeTakenToReachTheGreatestHeight * (Math.PI  / 180);
    const gravityForTimeTakenToReachTheGreatestHeight = parseFloat(document.querySelector('#tg').value);
    let result = ((initialVelocityForTimeTakenToReachTheGreatestHeight * Math.sin(angleForTimeTakenToReachTheGreatestHeightInRadian)) / gravityForTimeTakenToReachTheGreatestHeight).toFixed(4);
    result.textContent = '';
    document.querySelector('#tbutton').textContent = result; 
};

// T function
const TimeOfFlight = () => {
    const initialVelocityForTimeOfFlight = parseFloat(document.querySelector('#Tu').value);
    const angleForTimeOfFlight = parseFloat(document.querySelector('#Tangle').value);
    const angleForTimeOfFlightInRadian = angleForTimeOfFlight * (Math.PI  / 180);
    const gravityForTimeOfFlight = parseFloat(document.querySelector('#Tg').value);
    let result = ((2 * initialVelocityForTimeOfFlight * Math.sin(angleForTimeOfFlightInRadian)) / gravityForTimeOfFlight).toFixed(4);
    result.textContent = '';
    document.querySelector('#Tbutton').textContent = result; 
};

// R function
const RangeValue = () => {
    const initialVelocityForRange = parseFloat(document.querySelector('#Ru').value);
    const angleForRange = parseFloat(document.querySelector('#Rangle').value);
    const angleForRangeInRadian = angleForRange * (Math.PI  / 180);
    const gravityForRange = parseFloat(document.querySelector('#Rg').value);
    let result = (((initialVelocityForRange**2) * Math.sin(2 * angleForRangeInRadian)) / gravityForRange).toFixed(4);
    result.textContent = '';
    document.querySelector('#Rbutton').textContent = result; 
};

// Rmax function
const MaximumRange = () => {
    const initialVelocityForMaximumRange = parseFloat(document.querySelector('#Rmaxu').value);
    const gravityForMaximumRange = parseFloat(document.querySelector('#Rmaxg').value);
    let result = (((initialVelocityForMaximumRange)**2) / gravityForMaximumRange).toFixed(4);
    result.textContent = '';
    document.querySelector('#Rmaxbutton').textContent = result; 
};
