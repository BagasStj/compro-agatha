// menu.js
export const menu = [
    {
        label: 'Home',
        url: '#home', // Scroll ke elemen dengan ID 'introduction'
        onClick: (e) => {
          e.preventDefault(); // Mencegah tindakan default
          const element = document.getElementById('home');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Scroll smooth ke elemen
          }
        },
    },
    {
      label: 'About',
      url: '#intro', // Scroll ke elemen dengan ID 'introduction'
      onClick: (e) => {
        e.preventDefault(); // Mencegah tindakan default
        const element = document.getElementById('intro');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Scroll smooth ke elemen
        }
      },
    },
    {
      label: 'Features',
      url: '#fitur', // Scroll ke elemen dengan ID 'features'
      onClick: (e) => {
        e.preventDefault(); // Mencegah tindakan default
        const element = document.getElementById('fitur');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Scroll smooth ke elemen
        }
      },
    },
    // {
    //   label: 'Testimoni',
    //   url: '#testi', // Scroll ke elemen dengan ID 'testimonials'
    //   onClick: (e) => {
    //     e.preventDefault(); // Mencegah tindakan default
    //     const element = document.getElementById('testi');
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' }); // Scroll smooth ke elemen
    //     }
    //   },
    // },
    {
      label: 'Contact Us',
      url: '#contact', // Scroll ke elemen dengan ID 'contact'
      onClick: (e) => {
        e.preventDefault(); // Mencegah tindakan default
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Scroll smooth ke elemen
        }
      },
    },
  ];
  