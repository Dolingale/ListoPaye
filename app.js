// Today's date
let date = new Date();
// Get the month of the Today's date
let thisMonth = date.getMonth();
// Array of the months in French
const monthsArray = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

// Displays the current month in HTML
let month = document.querySelector("#month");
month.textContent = "Toutes les périodes sont calculées sur le mois en cours " + '(' + monthsArray[thisMonth] + ')';


// unit test 0
let test0 = ["2021-03-31", "2021-05-19", "2021-12-1"];
// unit test 1
let test1 = ["2021-09-10", "2021-04-4", "2021-08-14"];
// unit test 2
let test2 = ["2021-10-12", "2021-09-27"];
// unit test 3
let test3 = ["2021-04-1", "2021-08-10", "2021-11-12", "2021-04-21", "2021-01-14"];
// unit test 4
let test4 = ["2021-09-9", "2021-03-19", "2021-04-07", "2021-11-26", "2021-05-25", "2021-04-1"];
// unit test 5
let test5 = ["2021-11-11", "2021-09-26", "2021-08-11", "2021-06-5"];
let test = [test0, test1, test2, test3, test4, test5];


// Action to be taken for the number of tests
for (let j = 0; j <= 5; j++) {
  // Retrieves the <p> with id #absence + number of the test to display the dates of absences
  let absenceHTML = document.querySelector("#absence" + [j]);
  // Retrieves the <p> with id #return + number of the test to display response of the fuunction isInclusDansPeriode
  let returnAnswer = document.querySelector("#return" + [j]);
  // Initialize variable that will store the month of the holiday dates
  let dateArray = "";

  // Boolean function that checks if a holiday period corresponds to this month
  function isInclusDansPeriode(absences) {
    for (let i = 0; i < test[j].length; i++) {
      dateArray = absences[i].split("-");
      if (parseInt(dateArray[1]) - 1 === thisMonth) {
        return 1;
      }
    }

    return 0;
  }

  // Display the date of the absences in HTML
  absenceHTML.textContent = "Les dates de congès testées sont : ";
  absenceHTML.style.fontWeight = "bold";
  for (let i = 0; i < test[j].length; i++) {
    // Variable that will display the date in html format
    let dateInFrench = test[j][i].split("-");
    absenceHTML.innerHTML +=
      dateInFrench[2] + " " + monthsArray[parseInt(dateInFrench[1]) - 1] + " " + dateInFrench[0] + ", ";
  }

  // displays the results in html according to the response of the function isIncludedInPeriod
  if (isInclusDansPeriode(test[j]) === 1) {
    returnAnswer.innerHTML =
      "Des périodes de congès sont à prendre en compte sur ce mois. <br> <br> La fonction isInclusDansPeriode à retournée " +
      "<b>" +
      isInclusDansPeriode(test[j]) +
      "</b>";
    returnAnswer.style.color = "green";
  } else {
    returnAnswer.innerHTML =
      "Aucune période de congès n'est à prendre en compte pour ce mois. <br> <br> La fonction isInclusDansPeriode à retournée " +
      "<b>" +
      isInclusDansPeriode(test[j]) +
      "</b>";
    returnAnswer.style.color = "red";
  }
}








