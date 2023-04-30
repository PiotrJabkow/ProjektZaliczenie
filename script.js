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

