const readLess = document.querySelector(".read-less-area");
const textArea = document.querySelector(".text-area");
const para = document.querySelector("#para");

readLess.addEventListener("click", function () {
  console.log("clicked");

  if (textArea.classList.contains("hidden-content")) {
    textArea.classList.remove("hidden-content");
    para.innerHTML = "Read less ";
  } else {
    textArea.classList.add("hidden-content");
    para.innerHTML = "Read more ";
  }
});
