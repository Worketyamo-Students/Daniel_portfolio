
  // Récupérer tous les liens
  const navLinks = document.querySelectorAll('.nav-link');

  // Observer les sections
  const sections = document.querySelectorAll('section');
  const options = { threshold: 0.6 }; // quand 60% de la section est visible

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Retirer active de tous
        navLinks.forEach(link => link.classList.remove('active'));

        // Ajouter active au lien correspondant
        const id = entry.target.getAttribute('id');
        document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));

