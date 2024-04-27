const imgOfCard = [
  "./assets/card/cd (1).png",
  "./assets/card/cd (2).png",
  "./assets/card/cd (3).png",
  "./assets/card/cd (4).png",
  "./assets/card/cd (5).png",
  "./assets/card/cd (6).png",
  "./assets/card/cd (7).png",
  "./assets/card/cd (8).png",
  "./assets/card/cd (9).png",
  "./assets/card/cd (10).png",
  "./assets/card/cd (11).png",
  "./assets/card/cd.png",
];

imgOfCard.map((item) => {
  console.log(item);
  const card = document.getElementById("card");
  const div = document.createElement("div");
  div.classList.add("cardItem");
  div.innerHTML = `
      <!-- Card 1  -->
            <img src='${item}' alt="">
            <h2>
              Wireless Bluetooth Headset Single Ear ...
            </h2>
            <div class="flex flex-col">
              <a href="#" class="flex items-center gap-1 justify-center">
                <i class="bi bi-star-fill text-yellow-400 text-xs"></i>
                <i class="bi bi-star-fill text-yellow-400 text-xs"></i>
                <i class="bi bi-star-fill text-yellow-400 text-xs"></i>
                <i class="bi bi-star-fill text-yellow-400 text-xs"></i>
                <i class="bi bi-star-fill text-yellow-400 text-xs"></i>
              </a>
              <p>(121 Review)</p>
            </div>
            <div class="flex items-center gap-x-5 justify-center">
              <p class="text-2xl font-bold">
                $8.50
              </p>
              <p class="text-[#676E6E] text-lg">
                <span class="line-through">$16</span>
                <span>-50%</span>
              </p>
            </div>
        
          <!-- Card 1  -->
    `;
  card.appendChild(div);
});
