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

const arrDropDown = [
  ".kyc__reg-container",
  ".kyc__Pan--container",
  ".kyc__logo--container",
  ".kyc__gst--container",
  ".photo---kyc",
  ".doc--kyc",
];
const dropdownPhoto = document.querySelector(".dropDown1");
const photoKyc = document.querySelector(".first-kyc");
const docKyc = document.querySelector(".second-kyc");
const dropdownDocument = document.querySelector(".dropDown2 ");
const companyBtn = document.querySelector(".main__kyc-btn2");
const individualBtn = document.querySelector(".main__kyc-btn1");

const companyKyc = document.querySelector(".company_kyc");
const kycContainers = document.querySelectorAll(".kyc__container");

const kycCompanyContainers = document.querySelectorAll(".kyc__company");

const dropDownButtons = document.querySelectorAll(".icon-dropDown");

dropDownButtons.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    const id = event.target.closest(".kyc__container").dataset.id;

    const className = arrDropDown[id];

    const box = document.querySelector(className);

    box.classList.toggle("hidden");
  });
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
    kycCompanyContainers.forEach((elem) => {
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
  kycCompanyContainers.forEach((elem) => {
    addClass(elem, "hidden");
  });
  addClass(companyBtn, "notactive");
  removeClass(individualBtn, "notactive");
});
