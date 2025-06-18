let artikli = [
  ["img/arcane.png", "Arcane", "#", "read more"],
  ["img/bibble.png", "Bibble", "#", "read more"],
  ["img/radiohead.png", "Radiohead", "#", "read more"],
  ["img/nana.jpg", "Nana", "#", "read more"],
  ["img/chase.png", "Chase Atlantic", "#", "read more"],
  ["img/parakiss.jpg", "Paradise Kiss", "#", "read more"],
  ["img/theperks.jpg", "The Perks of Being a Wallflower", "#", "read more"],
  ["img/slowdive.jpg", "Slowdive", "#", "read more"],
  ["img/soulmate.jpg", "Soulmate", "#", "read more"],
  ["img/evanescence.png", "Evanescence", "#", "read more"],
  ["img/theatre.png", "Theatre: A Love Story", "#", "read more"],
  ["img/crow.png", "The Crow", "#", "read more"],
  ["img/touka.jpg", "Tokyo Ghoul", "#", "read more"],
  ["img/guram.jpg", "Guram Icon", "#", "read more"],
  ["img/paramore.jpg", "Paramore", "#", "read more"],
  ["img/nbhd.jpg", "The NBHD", "#", "read more"],
  ["img/hanabi.jpg", "Mobile Legends", "#", "read more"],
  ["img/alice.jpg", "Alice In Borderland", "#", "read more"],
  ["img/uptowngirls.png", "Uptown Girls", "#", "read more"],
  ["img/howto.jpg", "How To Lose A Guy in 10 Days", "#", "read more"],
  ["img/betterdays.jpg", "Better Days", "#", "read more"],
  ["img/ethel.jpg", "Preacher's Daughter", "#", "read more"],
  ["img/csm.jpg", "Chainsaw Man", "#", "read more"],
["img/boa.jpg", "Bôa", "#", "read more"],
  ["img/h2o.jpg", "H2O: Just Add Water", "#", "read more"],

];

for (i = 0; i < artikli.length; i++) {
  let article = document.createElement("article");
  article.classList.add("poster");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let a = document.createElement("a");

  img.setAttribute("src", artikli[i][0]);
  article.appendChild(img);
  h2.innerHTML = artikli[i][1];
  article.appendChild(h2);
  a.setAttribute("href", artikli[i][2]);
  a.innerHTML = artikli[i][3];
  p.appendChild(a);
  article.appendChild(p);

  let button = document.createElement("button");
  button.classList.add("cart-btn");
  button.innerHTML = "Add to Cart ";

  let cartIcon = document.createElement("img");
  cartIcon.setAttribute("src", "img/cart.png");
  cartIcon.classList.add("cart-icon");

  button.appendChild(cartIcon);

  article.appendChild(button);

  document.getElementById("cont").appendChild(article);
}
