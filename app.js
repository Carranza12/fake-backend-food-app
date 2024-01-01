const express = require("express");
const app = express();

const comidas = [
  {
    name: "Bacon, Egg & Cheese Biscuit",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202211_0085_BaconEggCheeseBiscuit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 460,
    description:
      "El Bacon, Egg & Cheese Biscuit incluye un buttermilk biscuit calientito pincelado con mantequilla auténtica. Tiene tocino ahumado Applewood, un esponjoso huevo dobladito y una rebanada de queso americano derretido",
    ingredients: ["Biscuit (Large)", "Folded Egg", "Bacon", "Milk"],
    availableCount: 30,
    categorie: "01",
  },
  {
    name: "Sausage, Egg & Cheese McGriddles",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_9841_SausageEggCheeseMcGriddle_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 550,
    description:
      "El Sausage, Egg & Cheese McGriddles® incluye griddle cakes suaves y calientitos con el dulce sabor de la miel de maple. En su interior un esponjoso huevo dobladito y una rebanada de queso americano derretido. McGriddles cakes no tienen conservantes, sabores ni colorantes artificiales de fuentes artificiales.",
    ingredients: [
      "Griddle Cakes",
      "Folded Egg",
      "Sausage Patty",
      "Clarified Butter",
    ],
    availableCount: 10,
    categorie: "01",
  },
  {
    name: "Hotcakes",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202208_0031_3HotCakes_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 580,
    description:
      "Tres hotcakes doraditos que se disuelven en la boca con mantequilla de verdad y el dulce sabor de la miel de maple como acompañantes.",
    ingredients: ["Water", "Enriched Flour", "Corn Flour", "Soybean Oil"],
    availableCount: 80,
    categorie: "01",
  },
  {
    name: "Sausage Burrito",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 310,
    description:
      "Dale algo picosito a tu mañana con un suave huevo revuelto, salchicha, queso derretido, chiles verdes, y cebollas, todo envuelto en una suave tortilla.",
    ingredients: ["Whole Eggs,", "Pork", "Tomatoes", "Skim Milk"],
    availableCount: 50,
    categorie: "01",
  },
  {
    name: "Double Quarter Pounder®* with Cheese",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
    calories: 740,
    description:
      "Cada Double Quarter Pounder with Cheese incluye dos patties de 100% carne fresca de ¼ de libra*, calientes, deliciosamente jugosos y cocinados en el minuto que ordenas. Se sazonan con una pizca de sal y pimienta, y se cocinan a la perfección en nuestras planchas. Se les agregan dos rebanadas de queso derretido, cebollas en tiras y crujientes pepinillos, todo en un pan con semillas de ajonjolí. No contiene sabores o conservantes artificiales ni colorantes agregados de fuentes artificiales**. Nuestros pepinillos contienen un conservante artificial, así que no lo ordenes si no quieres.",
    ingredients: [
      "Enriched Flour",
      "Maltodextrin",
      "Vegetable Proteins",
      "Vinegar",
    ],
    availableCount: 20,
    categorie: "02",
  },
  {
    name: "Double Cheeseburger",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/Header_DoubleCheeseburger_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 450,
    description:
      "La Double Cheeseburger de McDonald’s incluye dos patties de 100% carne de res condimentados con una pizca de sal y pimienta. Vienen cubiertos con crujientes pepinillos, cebolla picada, ketchup, mostaza y dos rebanadas de queso americano.",
    ingredients: ["Niacin", "Thiamine Mononitrate", "Sugar", "Proteins "],
    availableCount: 15,
    categorie: "02",
  },
  {
    name: "Big Mac",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
    calories: 590,
    description:
      "La perfección hecha hamburguesa que te hace agua la boca comienza con dos patties de 100% carne y la salsa Big Mac®, todo dentro de un pan con semillas de ajonjolí. Viene cubierta con pepinillos, crujiente lechuga, cebollas y queso americano para lograr ese sabor único de la hamburguesa 100% de carne.",
    ingredients: ["pea", "Modified Food Starch", "Sugar", "May Contain One"],
    availableCount: 100,
    categorie: "02",
  },
  {
    name: "McDouble",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/Header_McDouble_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 400,
    description:
      "La McDouble®, una hamburguesa doble y clásica de McDonald’s, incluye dos patties de 100% pura carne sazonados con una pizca de sal y pimienta, crujientes pepinillos, cebollas picadas, ketchup, mostaza y una rebanada de queso americano derretido. ",
    ingredients: [
      "Cucumbers",
      "Distilled Vinegar",
      "Salt",
      "Potassium Sorbate (preservative)",
    ],
    availableCount: 80,
    categorie: "02",
  },
  {
    name: "Cono de Vainilla",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202106_0336_LargeVanillaCone_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
    calories: 200,
    description:
      "Suave helado de vainilla, dulce y cremoso en un cono crujiente.",
    ingredients: ["Milk", "Sugar", "Cream", "Corn Syrup"],
    availableCount: 300,
    categorie: "03",
  },
  {
    name: "Chocolate Chip Cookie",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_1852_ChocolateChipCookie_Broken_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 170,
    description:
      "Nuestra galleta clásica viene repleta de chispas de chocolate. Horneada a la perfección, suave y calientita.",
    ingredients: [
      "Semi-sweet Chocolate Chips",
      "Soy Lecithin",
      "Enriched Flour",
      "Reduced Iron",
    ],
    availableCount: 20,
    categorie: "03",
  },
  {
    name: "McFlurry® with OREO® Cookies",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_3832_OREOMcFlurry_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 510,
    description: "Suave helado de vainilla mezclado con galletas OREO®",
    ingredients: ["Milk", "Sugar", "Cream", "Natural Flavor"],
    availableCount: 12,
    categorie: "03",
  },
  {
    name: "Hot Fudge Sundae",
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0337_HotFudgeSundae_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
    calories: 330,
    description:
      "¡Consiéntete con un Hot Fudge Sundae de McDonald’s! Nuestro Hot Fudge Sundae clásico está hecho de cremoso helado suave de vainilla y cubierto con un chocolatoso topping caliente.",
    ingredients: [
      "Sugar",
      "Water",
      "Nonfat Milk",
      "Hydrogenated Palm Kernel Oil",
    ],
    availableCount: 36,
    categorie: "03",
  },
];

const categories = [
  {
    id: "01",
    name: "Desayuno",
  },
  {
    id: "02",
    name: "Hamburguesas",
  },
  {
    id: "03",
    name: "Postres y Shakes",
  },
];

const usuarios = [
  {
    id: "01",
    name: "Francisco",
    lastName: "Carranza",
    email: "francisco.carranza.esquivel@gmail.com",
    pass: "123456",
    img: "https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg",
  },
  {
    id: "02",
    name: "Christian",
    lastName: "De Jesus",
    email: "christian.de.jesus@gmail.com",
    pass: "123456",
    img: "https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg",
  },
  {
    id: "03",
    name: "Jorge",
    lastName: "Garcia",
    email: "jorge.garcia@gmail.com",
    pass: "123456",
    img: "https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg",
  },
];
const pedidos = ["Pedido 1", "Pedido 2", "Pedido 3"];

app.get("/comidas", (req, res) => {
  res.status(200).json(comidas);
});

app.get("/comidas/:id", (req, res) => {
  const { id } = req.params;
  const comida = comidas.find((item) => item.id === id);
  res.status(200).json(comida);
});

app.get("/pedidos", (req, res) => {
  res.json(pedidos);
});

app.get("/login", (req, res) => {
  const { email, password } = req.body;
  const user = usuarios.find((u) => u.email === email && u.pass === password);
  if (!user) {
    res.status(401).json({
      message: "credenciales invalidas",
      token: null,
      user: null,
    });
  }
  res.status(200).json({
    message: "usuario logeado con exito",
    token: "EtJb4vRx?lZ3Z9njCdaY7bLd6hDIICGWJ9s0EIoMHGsXx?9ifN?ngpNqzCulYsd",
    user,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
