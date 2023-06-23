let observer = new IntersectionObserver(
    (entries, observer) => { 
    entries.forEach(entry => {
        /* Placeholder replacement */
        if (entry.isIntersecting) {
            
            entry.target.classList.add("active")
        }
        else {
            entry.target.classList.remove("active")
        }
        
      });
    }, {rootMargin: "0px 0px -300px 0px"});
document.querySelectorAll('.fade-in').forEach(ele => { observer.observe(ele) });