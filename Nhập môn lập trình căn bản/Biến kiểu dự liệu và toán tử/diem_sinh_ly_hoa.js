let inputbiological = prompt('Enter the biological');
let inputphysic = prompt('Enter the physic');
let inputchemistry = prompt('Enter the chemistry');
let biological = parseInt(inputbiological);
let physic = parseInt(inputphysic);
let chemistry = parseInt(inputchemistry);
let Total = biological + physic + chemistry;
let mediumscore = (biological + physic + chemistry) / 3;
document.write(" The Total is: " + Total);
document.write('<br/>');
document.write(" The mediumscore is: " + mediumscore)
