//template_4hubsji
//service_epxdagd
//Sw_7IS9IwGUCe2xjn

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_epxdagd",
      "template_4hubsji",
      event.target,
      "Sw_7IS9IwGUCe2xjn"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The Email service is temporarily unavailable. Please contact me directly on kenric.chui@gmail.com"
      );
    });
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open";
}
