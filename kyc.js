const addClass = (elem, className) => {
  if (!elem.classList.contains(className)) {
    elem.classList.add(className);
  }
};
const removeClass = (elem, className) => {
  if (elem.classList.contains(className)) {
    elem.classList.remove(className);
  }
};

const dropdownPhoto = document.querySelector(".dropDown1");
const photoKyc = document.querySelector(".first-kyc");
const docKyc = document.querySelector(".second-kyc");
const dropdownDocument = document.querySelector(".dropDown2 ");
const companyBtn = document.querySelector(".main__kyc-btn2");
const individualBtn = document.querySelector(".main__kyc-btn1");

const companyKyc = document.querySelector(".company_kyc");
const kycContainers = document.querySelectorAll(".kyc__container");

dropdownPhoto.addEventListener("click", () => {
  photoKyc.classList.toggle("hidden");
});
dropdownDocument.addEventListener("click", () => {
  docKyc.classList.toggle("hidden");
});

companyBtn.addEventListener("click", () => {
  removeClass(companyKyc, "hidden");
  kycContainers.forEach((elem) => {
    addClass(elem, "hidden");
  });
  removeClass(companyBtn, "notactive");
  addClass(companyBtn, "active");
  addClass(individualBtn, "notactive");
});

const companyType = document.getElementById("company");
companyType.addEventListener("change", () => {
  if (companyType.value !== "select") {
    kycContainers.forEach((elem) => {
      removeClass(elem, "hidden");
    });
  } else {
    kycContainers.forEach((elem) => {
      addClass(elem, "hidden");
    });
  }
});

individualBtn.addEventListener("click", () => {
  addClass(companyKyc, "hidden");
  kycContainers.forEach((elem) => {
    removeClass(elem, "hidden");
  });
  addClass(companyBtn, "notactive");
  removeClass(individualBtn, "notactive");
});
