document.getElementById('results').style.display = 'none';

submit.addEventListener('click', function(e) {  // Runs getValues when form's submit button is clicked.
  e.preventDefault();

  getValues();
})

getValues = () => {  // Converts values from form fields into integers, then assigns these integers to variables.
const age = parseInt(document.getElementById("age").value);
const gender = document.getElementsByName("gender"); // This produces a node-list with 2 items, male and female.  Male is checked by default.
const heightFeet = parseInt(document.getElementById("feet").value);
const heightInches = parseInt(document.getElementById("inches").value);
const weightStone = parseInt(document.getElementById("stone").value);
const weightLbs = parseInt(document.getElementById("lbs").value);

x = calculateAge(age); // calls the calculateAge function below, passes 'age' as an argument, assigns return value to x.
y = calculateWeight(weightStone, weightLbs); // calls the calculateWeight function below, passes 'weightStone' & 'weightLbs' as args, assigns return value to y.
z = calculateHeight(heightFeet, heightInches); // calls the calculateHeight function below, passes 'heightFeet' & 'heightWeight' as args, assigns return value to z.
finalResult(x, y, z, gender); // calls finalResult function below, passes return values of above 3 functions as args. 
}


calculateAge = age => { // Multiplies user's age by 5 and saves this as finalAge.
  finalAge = age * 5;
  return finalAge;
}

calculateWeight = (weightStone, weightLbs) => { // Converts user's imperial weight into kg, multiplies it by 10, and returns finalWeight.
  kilogramWeight = ((weightStone * 14) + weightLbs) * 0.453;
  finalWeight = kilogramWeight * 10;
  return finalWeight;
}

calculateHeight = (heightFeet, heightInches) => { // Converts user's imperial height into cm, multiplies it by 6.25, and returns finalHeight.
  centimeterHeight = ((heightFeet * 12) + heightInches) * 2.54;
  finalHeight = centimeterHeight * 6.25;
  return finalHeight;
}

finalResult = (x, y, z, gender) => {
  result = z + y - x; // finalWeight + finalHeight - finalAge.
  for(i = 0; i < gender.length; i++) { // This checks to see which gender the user checked. If 'male', +5 to finalResult. Else, -161 from finalResult.
    if(gender[i].checked) {
      finalResult = result + 5;
      break;
    } else {
      finalResult = result - 161;
      break;
    }
  }
 
  revealResult(finalResult); // Calls below function & passes finalResult as an argument.

  return finalResult;
}

revealResult = finalResult => {
  finalResult = Math.floor(finalResult);
  let finalBmi = finalResult.toString()
  
  document.getElementById('results').style.display = 'block'; // Reveals the 'results' box which was originally hidden (see line 1)
  const calories = document.getElementById("bmi-result"); // Grabs 'p' element.
  calories.classList.add("finalNumberStyling") // Applies simple styling to 'p' element.
  calories.innerText = finalBmi + ' calories per day'; // Inserts finalBmi string into 'p' element.
}