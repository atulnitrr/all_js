import * as ELEMENTS from "./elements.js";
import { Http } from "./http.js";

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener("click", searchWeather);

function searchWeather() {
  const CITY_NAME = ELEMENTS.ELEMENT_SEARCH_CITY.value.trim();
  if (CITY_NAME.length == 0) {
    console.log("Please enter city name ");
    alert("Enter city name");
  } else {
    Http.fetchData("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res);
        console.log(ELEMENTS.ELEMENT_DOG);
        ELEMENTS.ELEMENT_DOG.firstElementChild.setAttribute("src", res.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
