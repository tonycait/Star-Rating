const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const myAfterCard = document.getElementsByClassName("afterCardContainer");
  const myCard = document.getElementsByClassName("card-container")[0];
  myCard.style.display = "none";
  myAfterCard[0].style.display = "flex";
});

//
