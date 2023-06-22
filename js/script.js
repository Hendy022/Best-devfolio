const SectionHero = document.querySelector(".hero");
const Uturn = document.querySelector(".uturn");

const navLink = document.querySelectorAll(".nav-link");

const mobNav = document.querySelector(".nav-mob-container");
const btnNav = document.querySelector(".btn-nav");
const btnNavClose = document.querySelector(".btn-menu-close");

/****Nav mob**** */

btnNav.addEventListener("click", () => {
  mobNav.classList.add("open");
});
btnNavClose.addEventListener("click", () => {
  mobNav.classList.remove("open");
});

navLink.forEach(function (Link) {
  Link.addEventListener("click", function () {
    // Add the 'active' class to the clicked element
    mobNav.classList.remove("open");
  });
});

/*****uturn***** */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Uturn.classList.add("back");
      } else {
        Uturn.classList.remove("back");
      }
    });
  },
  {
    threshold: 0.9, // Observe when 90% of element is visible
  }
);

observer.observe(SectionHero);

/**** sticky nav ****/

const navSticky = document.querySelector(".nav-sticky");
const heroSection = document.querySelector(".hero");
const heroText = document.querySelector(".hero-text");

// Define observer options
const heroObserverOptions = {
  threshold: 0.8,
};

// Define the observer callback function
const heroObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navSticky.classList.remove("fixed-top");
      navSticky.classList.remove("bg-nav");
      heroText.classList.remove("mt-nav");
    } else {
      navSticky.classList.add("fixed-top");
      navSticky.classList.add("bg-nav");
      heroText.classList.add("mt-nav");
    }
  });
};

// Create the observer instance
const heroObserver = new IntersectionObserver(
  heroObserverCallback,
  heroObserverOptions
);

// Observe the hero section
heroObserver.observe(heroSection);

/***************** */

/*******Numbers counting**** */

const counters = document.querySelectorAll(".number");
const secCounters = document.getElementById("numbers");
const speed = 100000000; // The higher the slower

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Do something with the observed section
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });

        let sectionScrolled = false;
      }
    });
  },
  {
    rootMargin: "0px 0px -80px 0px",
  }
);

countObserver.observe(secCounters);

/*****section observers****/
// Define the sections to observe
// Select all the sections
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const servicesSection = document.getElementById("services");
const workSection = document.getElementById("work");
const blogSection = document.getElementById("blog");
const contactSection = document.getElementById("contact");

/***********/

const homeLink = document.querySelector(".homelink");
const aboutLink = document.querySelector(".aboutlink");
const servicesLink = document.querySelector(".serviceslink");
const workLink = document.querySelector(".worklink");
const blogLink = document.querySelector(".bloglink");
const contactLink = document.querySelector(".contactlink");

// Define observer options

const observerOptions = {
  rootMargin: "-50px 0px -50px 0px",
  threshold: 0.4,
};
const servicesObserverOptions = {
  rootMargin: "-50px 0px -50px 0px",
  threshold: 0.2,
};

// Define observer callbacks
const homeObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      homeLink.classList.add("active");
    } else {
      homeLink.classList.remove("active");
    }
  });
};

const aboutObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutLink.classList.add("active");
    } else {
      aboutLink.classList.remove("active");
    }
  });
};

const servicesObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      servicesLink.classList.add("active");
    } else {
      servicesLink.classList.remove("active");
    }
  });
};

const workObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      workLink.classList.add("active");
    } else {
      workLink.classList.remove("active");
    }
  });
};

const blogObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      blogLink.classList.add("active");
    } else {
      blogLink.classList.remove("active");
    }
  });
};

const contactObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      contactLink.classList.add("active");
    } else {
      contactLink.classList.remove("active");
    }
  });
};

// Create observer instances
const homeObserver = new IntersectionObserver(
  homeObserverCallback,
  observerOptions
);
const aboutObserver = new IntersectionObserver(
  aboutObserverCallback,
  observerOptions
);
const servicesObserver = new IntersectionObserver(
  servicesObserverCallback,
  servicesObserverOptions // Use the custom options for the services observer
);
const workObserver = new IntersectionObserver(
  workObserverCallback,
  observerOptions
);
const blogObserver = new IntersectionObserver(
  blogObserverCallback,
  observerOptions
);
const contactObserver = new IntersectionObserver(
  contactObserverCallback,
  observerOptions
);

// Observe sections with their respective observer instance
homeObserver.observe(homeSection);
aboutObserver.observe(aboutSection);
servicesObserver.observe(servicesSection);
workObserver.observe(workSection);
blogObserver.observe(blogSection);
contactObserver.observe(contactSection);
