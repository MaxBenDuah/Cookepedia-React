const favouritesData = [
  {
    id: 1,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-vermouth-air-fried-shrimp-1674489316.jpg?crop=0.833xw:0.696xh;0.0221xw,0.134xh&resize=980:*",
    recipeName: "Vermouth Air Fried Shrimp",
    description:
      "These quick-marinated shrimp cook in just 10 minutes. Serve them on a salad, over pasta, or with some steamed veggies for a light, fast, tasty dinner!",
    linkText: "Get the recipe for Vermouth Air Fried Shrimp.",
  },
  {
    id: 2,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-crispy-chicken-thighs-1642691794.jpg?crop=1xw:0.9998010346199762xh;center,top&resize=980:*",
    recipeName: "Crispy Chicken Thighs with Garlic and Rosemary",
    description:
      "Your whole family will fall in love with these crispy chicken thighs (emphasis on 'crispy'). Garlic and rosemary make them as aromatic as they are delicious. Serve with a fresh salad for an extra touch of green.",
    linkText: "Get the recipe for Crispy Chicken Thighs.",
  },
  {
    id: 3,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-stovetop-burgers-1674489414.jpg?crop=0.707xw:0.707xh;0.0323xw,0.103xh&resize=980:*",
    recipeName: "Stovetop Cheeseburge",
    description:
      "You don't need to break out the grill to eat a good burger. And these cook very quickly! There's a reason they're a fast-food staple.",
    linkText: "Get the recipe for Stovetop Cheeseburger.",
  },
  {
    id: 4,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-peasy-mac-n-cheesy-1674489523.jpg?crop=0.874xw:0.875xh;0,0&resize=980:*",
    recipeName: "Easy-Peasy Stovetop Mac 'n Cheesy",
    description:
      "A can of evaporated milk and fresh shredded cheese makes this no-drain pasta recipe (you read that right) even easier than the boxed stuff! It's tastier, too.",
    linkText: "Get the recipe for Easy-Peasy Stovetop Mac 'n Cheesy.",
  },
  {
    id: 5,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-fish-sticks-1674489637.jpg?crop=1xw:1xh;center,top&resize=980:*",
    recipeName: "Cornflake Crusted Fish and Chips",
    description:
      "Nothing beats fish sticks for that certain kind of kid—but that doesn't mean you need to fill your freezer with boxes of the stuff. This takes just 20 minutes from fridge to plate.",
    linkText: "Get the recipe for Cornflake Crusted Fish and Chips.",
  },
  {
    id: 6,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-grain-salad-trout-1674490196.jpg?crop=0.8382110290924881xw:1xh;center,top&resize=980:*",
    recipeName: "Grain Salad with Trout",
    description:
      "A light broil turns trout (or other white fish) into a delicate and tender topper for a tasty grain salad. It's perfect for a quick, filling dinner.",
    linkText: "Get the recipe for Grain Salad with Trout.",
  },
  {
    id: 7,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-tortellini-soup-1642630358.jpg?crop=1xw:0.9999530428249437xh;center,top&resize=980:*",
    recipeName: "Chicken-and-Spinach Tortellini Soup",
    description:
      "Honestly, we could eat this soup for days. It's simple, it's tasty, and it's a great way to stretch a rotisserie chicken!",
    linkText: "Get the recipe for Chicken-and-Spinach Tortellini Soup.",
  },
  {
    id: 8,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-air-fryer-enchilada-pie-1674489122.jpg?crop=0.837xw:0.698xh;0.0595xw,0.0647xh&resize=980:*",
    recipeName: "Air Fryer Salsa Verde Enchilada Pie",
    description:
      "An air fryer cuts the bake time for our traditional salsa verde enchiladas down from 20 to just 6 minutes. Store-bought shortcuts like rotisserie chicken make assembling these individual dishes even faster.",
    linkText: "Get the recipe for Air Fryer Salsa Verde Enchilada Pie.",
  },
  {
    id: 9,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-asparagus-frittata-1674488992.jpg?crop=0.861xw:0.719xh;0.0561xw,0.161xh&resize=980:*",
    recipeName: "Asparagus Frittata",
    description:
      "Want a fast dinner that's still a little elegant? Consider a breakfast-for-dinner option! This delicious egg dish pairs well with quick-cooked bacon and a slice of toast. Serve it with a glass of wine!",
    linkText: "Get the recipe for Asparagus Frittata.",
  },
  {
    id: 10,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-bagel-pizza-1674488855.jpg?crop=0.857xw:0.857xh;0.0697xw,0.121xh&resize=980:*",
    recipeName: "Bagel Pizza",
    description:
      "Whether you're feeding kids, or just feeling young at heart, there's no denying that these fast, filling little pizzas are about as satisfying as they get. Plus, we've got a little trick to keep the sauce from spilling everywhere.",
    linkText: "Get the recipe for Bagel Pizzas.",
  },
  {
    id: 11,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-crispy-gnocchi-with-sausage-1674488774.jpg?crop=0.847xw:0.848xh;0.0867xw,0.0912xh&resize=980:*",
    recipeName: "Crispy Gnocchi with Sausage and Sage Brown Butter",
    description:
      "Keep this four-ingredient dish in your back pocket for whenever you want a simple, filling meal in a flash.",
    linkText: "Get the recipe for Crispy Gnocchi with Sausage.",
  },
  {
    id: 12,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-air-fryer-fajitas-1674488607.jpg?crop=1xw:1xh;center,top&resize=980:*",
    recipeName: "Air Fryer Fajitas",
    description:
      "These still-sizzling fajitas will be a hit with the whole family. Cooking them in an air fryer makes the whole thing quicker, and cleanup's a breeze: No oil splatters on the stovetop!",
    linkText: "Get the recipe for Air Fryer Fajitas.",
  },
  {
    id: 13,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-chicken-and-veggies-stir-fry-6452a10aa5c3f.jpg?crop=0.536xw:1.00xh;0,0&resize=980:*",
    recipeName: "Chicken and Veggies Stir Fry",
    description:
      "If you're hungry for takeout, skip the wait (and the delivery fee) and just whip this up. It's got an easy sauce made mostly out of pantry ingredients, is packed with fresh veggies, and the whole thing comes together faster than take-out.",
    linkText: "Get the recipe for Chicken and Veggies Stir Fry.",
  },
  {
    id: 14,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-salisbury-steak-1642715810.jpg?crop=1xw:1xh;center,top&resize=980:*",
    recipeName: "Easy Weeknight Salisbury Steak",
    description:
      "This well-loved dish has been popular for decades—and for good reason: Few simple meals are more satisfying.",
    linkText: "Get the recipe for Salisbury Steak.",
  },
  {
    id: 15,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-crispy-chicken-thighs-1642691794.jpg?crop=1xw:0.9998010346199762xh;center,top&resize=980:*",
    recipeName: "Crispy Chicken Thighs with Garlic and Rosemary",
    description:
      "Your whole family will fall in love with these crispy chicken thighs (emphasis on 'crispy'). Garlic and rosemary make them as aromatic as they are delicious. Serve with a fresh salad for an extra touch of green.",
    linkText: "Get the recipe for Crispy Chicken Thighs.",
  },
  {
    id: 16,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-tuna-melt-64529b179c289.jpg?crop=1.00xw:0.834xh;0,0.0341xh&resize=980:*",
    recipeName: "Tuna Melt",
    description:
      "The underrated tuna melt, that staple of diners and lunch plates everywhere, deserves to be making a big time comeback. First, it's as tasty as can be. Second, it's easy to make, and third, you probably have most of the ingredients in your fridge right now. What are you waiting for?",
    linkText: "Get the recipe for Tuna Melt.",
  },
  {
    id: 17,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-salmon-and-creamed-spinach-fettuccini-6452a00904241.jpg?crop=1.00xw:0.835xh;0,0.0204xh&resize=980:*",
    recipeName: "Salmon and Creamed Spinach Fettuccini",
    description:
      "This may be one of our favorites. If you're craving a tasty pasta dish that's a little more grown-up than jarred red sauce, give this dish a whirl. We're pretty sure it'll become a regular part of your dinner plans.",
    linkText: "Get the recipe for Salmon and Creamed Spinach Fettuccini.",
  },
  {
    id: 18,
    img: "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-migas-with-chorizo-64529e105c15f.jpg?crop=1.00xw:0.834xh;0,0.0863xh&resize=980:*",
    recipeName: "Migas with Chorizo",
    description:
      "There's nothing for a fast dinner like making breakfast for dinner! This recipe goes all out—scrambled eggs with corn tortillas, spicy chorizo, and plenty of toppings—and still takes just 15 minutes to make.",
    linkText: "Get the recipe for Migas with Chorizo.",
  },
];

export default favouritesData;
