import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import UserAge from "./js/calculator.js";

$(document).ready(function () {
  $("form#new-form").submit(function (event) {
    event.preventDefault();
    const inputAge = $("#age-entered").val();
    const inputExpectancy = $("#expectancy-entered").val();
    const userAge = new UserAge(inputAge, inputExpectancy);
    const mercuryAge = userAge.mercuryCalculator();
    const venusAge = userAge.venusCalculator();
    const marsAge = userAge.marsCalculator();
    const jupiterAge = userAge.jupiterCalculator();
    const earthExpectancy = userAge.earthExpectancy();
    const mercuryLifeExpectancy = userAge.mercuryExpectancy();
    const venusLifeExpectancy = userAge.venusExpectancy();
    const marsLifeExpectancy = userAge.marsExpectancy();
    const jupiterLifeExpectancy = userAge.jupiterExpectancy();
    $("#age-entered-display").text(inputAge);
    $("#mercury-age").text(mercuryAge);
    $("#venus-age").text(venusAge);
    $("#mars-age").text(marsAge);
    $("#jupiter-age").text(jupiterAge);
    $("#earth-expectancy").text(earthExpectancy);
    $("#mercury-expectancy").text(mercuryLifeExpectancy);
    $("#venus-expectancy").text(venusLifeExpectancy);
    $("#mars-expectancy").text(marsLifeExpectancy);
    $("#jupiter-expectancy").text(jupiterLifeExpectancy);
  });
});
