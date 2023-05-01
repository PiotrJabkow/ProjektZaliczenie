// clasa Car i tablica z samochodami

class Car {
  id;
  brand;
  year;
  model;
  mileage;
  engineCapacity;
  enginePower;
  price;
  image;

  constructor(
    id,
    brand,
    year,
    model,
    mileage,
    engineCapacity,
    enginePower,
    price,
    image
  ) {
    (this.id = id),
      (this.brand = brand),
      (this.year = year),
      (this.model = model),
      (this.mileage = mileage),
      (this.engineCapacity = engineCapacity),
      (this.enginePower = enginePower),
      (this.price = price),
      (this.image = image);
  }
}

const cars = [
  new Car(
    1,
    "Toyota",
    2019,
    "Supra",
    32000,
    3.2,
    280,
    219000,
    "https://images.pexels.com/photos/3874330/pexels-photo-3874330.jpeg"
  ),
  new Car(
    2,
    "Toyota",
    2016,
    "Yaris",
    88000,
    0.9,
    80,
    44500,
    "https://images.pexels.com/photos/5733711/pexels-photo-5733711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Car(
    3,
    "BMW",
    2020,
    "M4",
    19500,
    1.9,
    160,
    107500,
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Car(
    4,
    "BMW",
    2018,
    "X5",
    31500,
    2.4,
    170,
    135900,
    "https://images.pexels.com/photos/10467815/pexels-photo-10467815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Car(
    5,
    "Honda",
    2015,
    "Civic",
    52100,
    1.9,
    140,
    67900,
    "https://images.pexels.com/photos/14821869/pexels-photo-14821869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Car(
    6,
    "Mazda",
    2010,
    "MX-5",
    66800,
    1.6,
    110,
    37900,
    "https://images.pexels.com/photos/5397334/pexels-photo-5397334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
  new Car(
    7,
    "Mazda",
    2014,
    "3",
    93000,
    1.9,
    140,
    28900,
    "https://images.pexels.com/photos/12765641/pexels-photo-12765641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ),
];


const $carsTable = document.getElementById("carsTable");
cars.forEach((car) => {
  const carDiv = document.createElement("div");
  carDiv.classList.add("carL");
  carDiv.setAttribute("id", car.id);

  const carImg = document.createElement("img");
  carImg.src = car.image;
  const carBrand = document.createElement("h3");
  carBrand.innerHTML = car.brand;
  const carYear = document.createElement("p");
  carYear.innerHTML = `Rok produkcji samochodu: <b> ${car.year} </b>`;
  const carModel = document.createElement("p");
  carModel.innerHTML = `Model samochodu: <b> ${car.model}</b>`;
  const carMileage = document.createElement("p");
  carMileage.innerHTML = `Przebieg samochodu: <b> ${car.mileage} km</b>`;
  const carengineCapacity = document.createElement("p");
  carengineCapacity.innerHTML = `Pojemność silnika samochodu: <b> ${car.engineCapacity} </b>`;
  const carenginePower = document.createElement("p");
  carenginePower.innerHTML = `Moc silnika samochodu: <b> ${car.enginePower} kW</b>`;
  const carPrice = document.createElement("p");
  carPrice.innerHTML = `Cena samochodu: <b> ${car.price} zł </b>`;

  carDiv.appendChild(carImg);
  carDiv.appendChild(carBrand);
  carDiv.appendChild(carYear);
  carDiv.appendChild(carModel);
  carDiv.appendChild(carMileage);
  carDiv.appendChild(carengineCapacity);
  carDiv.appendChild(carenginePower);
  carDiv.appendChild(carPrice);

  $carsTable.appendChild(carDiv);
});

// zmienne

const $middle = document.getElementById("middle");
const $form = document.getElementById("form");
const $fName = document.getElementById("fName");
const $phone = document.getElementById("phone");
const $dateD = document.getElementById("dateD");
const chosenCar = document.querySelector("carActive");
const $choseCar = document.getElementById("choseCar");
const $header = document.getElementById("header");
const $headerText1 = document.getElementById("headerText1");
const $headerText2 = document.getElementById("headerText2");
const $accessories = document.querySelectorAll('input[name="accessories"]');
const $summaryPrice = document.getElementById("summaryPrice");
const summaryPriceEnd = document.getElementById("summaryPriceEnd");
const summaryImg = document.getElementById("summaryImg");
const carAll = document.querySelectorAll(".carL");
const formView = document.getElementById("formView");
const $backBtn = document.getElementById("backBtn");
const $summaryBtn = document.getElementById("summaryBtn");
const $summaryEnd = document.getElementById("summaryEnd");
const $finance = document.querySelectorAll('input[name="finance"]');
const $mistakesParag = document.querySelector("#mistakes");
const $listView = document.getElementById("listView");
const $listBrand = document.querySelectorAll(".carL h3");
const $selectBrand = document.getElementById("selectBrand");


// wyszukiwanie, wybór marki

  $listBrand.forEach(car => {
  const brand = car.textContent.trim();

  const optionBrand = $selectBrand.querySelector(`[value="${brand}"]`);
  if (!optionBrand) {
    const option = document.createElement("option");
    option.value = brand;
    option.text = brand;
    $selectBrand.appendChild(option);
  }
});


$selectBrand.addEventListener("change", () => {
    const selectedBrand = $selectBrand.value;
    carAll.forEach((car) => {
      if (selectedBrand === "all" || car.querySelector("h3").textContent.trim() === selectedBrand) {
        car.style.display = "block";
      } else {
        car.style.display = "none";
      }
    });
  });



$carsTable.addEventListener("click", function () {
  $middle.style.display = "block";
});


$form.addEventListener("submit", (event) => {
  const formSave = new FormData(event.target);
  localStorage.setItem("formData", JSON.stringify(Object.fromEntries(formSave.entries())));
});

const formSaved = JSON.parse(localStorage.getItem("formData"));
  if (formSaved) {
    for (const [name, value] of Object.entries(formSaved)) {
      const input = $form.querySelector(`[name="${name}"]`);
      if (input) {
        input.value = value;
      }
    }
}



// akcesoria, kwoty, zdjęcie

let carPrice = 0;
let accessoryPrice = 0;
let carAccessoryPrice = 0;

$accessories.forEach((accessory) => {
  accessory.addEventListener("change", () => {
    if (accessory.checked) {
      accessoryPrice += parseInt(accessory.value);
    } else {
      accessoryPrice -= parseInt(accessory.value);
    }
    summaryCarAccessoryPrice();
  });
});

function summaryCarAccessoryPrice() {
  const chosenCar = document.querySelector(".carActive");
  if (chosenCar) {
    carPrice = parseInt(
      chosenCar.querySelector("p:nth-child(8) b").textContent
    );
  }
  carAccessoryPrice = carPrice + accessoryPrice;
  $summaryPrice.value = carAccessoryPrice;
}

carAll.forEach((car) => {
  car.addEventListener("click", () => {
    carAll.forEach((car) => {
      car.style.display = "none";
    });
    car.style.display = "block";
    car.classList.add("carActive");

    const activeCarImg = car.getElementsByTagName("img")[0].src;
    summaryImg.src = activeCarImg;
    summaryImg.addEventListener("load", () => {
      summaryImg.style.display = "block";
    });

    summaryCarAccessoryPrice();

    $header.style.display = "block";
    $headerText1.style.display = "none";
    $headerText2.innerHTML = "<h1>Wybrałeś samochód:</h1>";
    $listView.style.display = "none";
  });
});


// pobranie wyboru sposobu płatności i ceny całkowitej

$finance.forEach((radioBtn) => {
  radioBtn.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    document.querySelector("#finance\\.value").textContent = selectedValue;
  });
});


$summaryBtn.addEventListener("click", () => {
  const carAccessoryPrice = parseInt($summaryPrice.value);
  document.querySelector("#summaryPriceEnd\\.value").textContent =
    carAccessoryPrice;
});

// zapisywanie danych w localStorage po wpisaniu w input

$fName.addEventListener("input", () => {
  if ($fName.value !== "" && /^[A-Za-z]+\s[A-Za-z]+$/.test($fName.value)) {
    localStorage.setItem("fName", $fName.value);
  }
});

$phone.addEventListener("input", () => {
  if ($phone.value !== "" && /^[0-9]{9}$/.test($phone.value)) {
    localStorage.setItem("phone", $phone.value);
  }
});

$dateD.addEventListener("input", () => {
  if ($dateD.value !== "") {
    localStorage.setItem("dateD", $dateD.value);
  }
});

const financeInputs = document.querySelectorAll('input[name="finance"]');
financeInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const finance = document.querySelector('input[name="finance"]:checked').value;
    localStorage.setItem("finance", finance);
  });
});

function populateFormFromLocalStorage() {
  const fName = localStorage.getItem("fName");
  const phone = localStorage.getItem("phone");
  const dateD = localStorage.getItem("dateD");
  const finance = localStorage.getItem("finance");

  if (fName) {
    $fName.value = fName;
  }
  if (phone) {
    $phone.value = phone;
  }
  if (dateD) {
    $dateD.value = dateD;
  }
  if (finance) {
    const financeInput = document.querySelector(`input[value="${finance}"]`);
    if (financeInput) {
      financeInput.checked = true;
    }
  }
}

window.addEventListener("load", () => {
  populateFormFromLocalStorage();
});


//błędy w formularzu

$summaryBtn.addEventListener("click", () => {
  let mistakes = [];
  
  
  if ($fName.value === "") {
      mistakes.push("Proszę wprowadzić imię i nazwisko.");
    } else if (!/^[A-Za-z]+\s[A-Za-z]+$/.test($fName.value)) {
      mistakes.push(`Proszę wpisać imię i nazwisko w formacie "imię 'spacja' nazwisko".`);
    }
  
  if ($phone.value === "") {
      mistakes.push("Proszę wprowadzić numer telefonu.");
    } else if (!/^[0-9]{9}$/.test($phone.value)) {
      mistakes.push("Numer telefonu musi mieć dokładnie 9 cyfr.");
    }

  if ($dateD.value === "") {
    mistakes.push("Proszę wybierz datę dostawy.");
  }
  if (!document.querySelector('input[name="finance"]:checked')) {
      mistakes.push("Proszę wybrać sposób finansowania.");
    }

  if (mistakes.length > 0) {
    event.preventDefault();
    let $mistakesParag = document.querySelector("#mistakes");
    $mistakesParag.innerHTML = `Wystąpił błąd. <br /> ${mistakes.join(
      "<br />"
    )}`;
  } 

  else {
    $header.style.display = "none";
    $carsTable.style.display = "none";
    $middle.style.display = "none";
    $summaryEnd.style.display = "block";
    $listView.style.display = "none";
    localStorage.clear();
  }

  carAll.forEach((car) => {
    if (car.classList.contains("carActive")) {
      brand = car.querySelector("h3").textContent;
      year = car.querySelector("p:nth-child(3) b").textContent;
      model = car.querySelector("p:nth-child(4) b").textContent;

      $choseCar.textContent = `Wybrałeś: ${brand}, ${model}. Rok produkcji: ${year}.`;
    }
});

});

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  $summaryBtn.click();
  });

  $phone.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      if (event.target.value.length > 9) {
      event.target.value = event.target.value.slice(0, 9);
      }
  });


$summaryBtn.addEventListener("click", () => {
  $header.style.display = "none";
  $carsTable.style.display = "none";
  $middle.style.display = "none";
  
  $summaryEnd.style.display = "block";

  carAll.forEach((car) => {
    if (car.classList.contains("carActive")) {
      brand = car.querySelector("h3").textContent;
      year = car.querySelector("p:nth-child(3) b").textContent;
      model = car.querySelector("p:nth-child(4) b").textContent;

      $choseCar.textContent = `Wybrałeś: ${brand}, ${model}. Rok produkcji: ${year}.`;
    }
  });
});

// warunek daty

const $today = new Date();
const $maxDate = new Date($today.setDate($today.getDate() + 14)).toISOString().split("T")[0];

$dateD.setAttribute("min", new Date().toISOString().split("T")[0]);
$dateD.setAttribute("max", $maxDate);

// przycisk powrotu

$backBtn.addEventListener("click", () => {
  carAll.forEach((carAll) => {
    carAll.style.display = "block";
    $middle.style.display = "none";
    $headerText1.style.display = "block";
    $headerText2.style.display = "none";
    $listView.style.display = "block";
  });
  location.reload(true);
});

