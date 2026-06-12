document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    const offset = 80;
    const topPosition = target.offsetTop - offset;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
// console.log(menuToggle)

  menuToggle.addEventListener("click", () => {
    console.log(navLinks)
    navLinks.classList.toggle("active");
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.style.opacity = "0");
    slides[i].style.opacity = "1";
  }

  document.querySelector(".right").onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  };

  document.querySelector(".left").onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  };

  showSlide(index);
});


document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector(".about");
  const position = about.getBoundingClientRect().top;

  if (position < window.innerHeight - 100) {
    about.classList.add("show");
  }
});


document.addEventListener("scroll", () => {
    const buttons = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.plan-card');

    buttons.forEach(button => {

      button.addEventListener('click', () => {

        // active button
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        cards.forEach(card => {

          if(filter === 'all'){
            card.style.display = 'block';
          }
          else{
            const category = card.getAttribute('data-category');

            if(category === filter){
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }

        });

      });

    });

    // Card click
    // document.querySelectorAll('.plan-card').forEach(card => {
    //   card.addEventListener('click', () => {
    //     alert('Open enquiry popup here.');
    //   });
    // });
})


document.addEventListener("DOMContentLoaded", () => {
const modal = document.getElementById("enquiryModal");
const closeBtn = document.querySelector(".close-btn");

const projectTypeInput = document.getElementById("projectType");
// const selectedPlan = document.getElementById("selectedPlan");

/* ALL BUTTONS */
const enquiryButtons = document.querySelectorAll(".open-enquiry");

enquiryButtons.forEach(button => {

    button.addEventListener("click", function(){

        // GET DATA ATTRIBUTE
        const title = this.getAttribute("data-title");

        // SET IN MODAL
        // selectedPlan.innerHTML = "Selected: " + title;

        // SET HIDDEN FIELD
        projectTypeInput.value = title;

        // OPEN MODAL
        modal.style.display = "flex";
    });

});

/* CLOSE */
closeBtn.onclick = function(){
    modal.style.display = "none";
};

/* OUTSIDE CLICK */
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
};
});