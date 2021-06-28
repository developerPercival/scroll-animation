const element = document.querySelectorAll(".animate");

//Create an instance of observer
const observer = new IntersectionObserver(
  function (entries) {
    //Loop through entries array
    entries.forEach((entry) => {
      //Check if entry is intersecting
      if (entry.isIntersecting) {
        //Add fade in class
        entry.target.classList.add("fade-in");
      } else {
        //Remove fade in class
        entry.target.classList.remove("fade-in");
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 1.0 }
);

//observe element
element.forEach((el) => {
  observer.observe(el);
});
