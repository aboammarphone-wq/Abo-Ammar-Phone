// ===============================
// PRODUCT DATABASE
// ===============================

const products = {

  reno8t: {
    name: "Oppo Reno 8T",
    images: [
      "reno8t-1.jpg",
      "reno8t-2.jpg",
      "reno8t-3.jpg"
    ],
    specs: [
      "256 جيجا - رام 8+8",
      "شاشة Super AMOLED",
      "كاميرا 100 ميجا + أمامية 32 ميجا",
      "كاميرا ميكروسكوب 20X و 40X",
      "بطارية 5000 مللي أمبير",
      "شحن SuperVOOC سريع جداً",
      "يدعم NFC لشحن كروت الكهرباء",
      "صوت استريو",
      "الحالة ممتازة جداً جداً",
      "مع الكرتونة والشاحن السريع"
    ]
  },

  oppoA60: {
    name: "Oppo A60",
    images: [
      "oppoA60-1.jpg",
      "oppoA60-2.jpg",
      "oppoA60-3.jpg"
    ],
    specs: [
      "256 جيجا - رام 8+8",
      "صوت ستيريو",
      "شحن سريع",
      "بطارية 5000 مللي أمبير",
      "الشاحن الأصلي السريع",
      "الحالة كسر زيرو"
    ]
  }

};

// ===============================
// LOAD PRODUCT PAGE
// ===============================

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

if (productId && products[productId]) {

  const product = products[productId];

  const productName = document.getElementById("productName");
  const mainImage = document.getElementById("mainImage");
  const thumbContainer = document.getElementById("thumbContainer");
  const specsList = document.getElementById("productSpecs");
  const orderBtn = document.getElementById("orderBtn");

  if (productName && mainImage && thumbContainer && specsList && orderBtn) {

    productName.textContent = product.name;

    // Main image
    mainImage.src = product.images[0];

    // Thumbnails
    product.images.forEach((img, index) => {

      const thumb = document.createElement("img");
      thumb.src = img;
      thumb.classList.add("thumb");

      if (index === 0) thumb.classList.add("active");

      thumb.addEventListener("click", () => {
        mainImage.src = img;
        document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
      });

      thumbContainer.appendChild(thumb);
    });

    // Specs
    product.specs.forEach(spec => {
      const li = document.createElement("li");
      li.textContent = spec;
      specsList.appendChild(li);
    });

    // WhatsApp button
    orderBtn.href = `https://wa.me/201148114150?text=عايز أطلب ${product.name}`;

  }

}