const comments = [
    {
        id: '1',
        title: 'Ammie Kross',
        comment:
            'We had a free day in San Diego, and we decided to try something unusual. FishExperts is a truly worthwhile company. I liked the organization at the highest level, everything is clear and on schedule. Plus, they have very clean boats and friendly staff.',
        image: '/img/testimonials/ammie-kross.webp',
        alt: 'Ammie Kross photo',
        date: 'JANUARY 05, 2024'
    },
    {
        id: '2',
        title: 'Luke Adamson',
        comment:
            'We went fishing with the whole family (with children 4 and 6 years old). We all really liked it, although I\'m not a big fishing fan. This is a combination of excursions, boat trips and fishing in wonderful spots. Thank you very much, FishExperts!',
        image: '/img/testimonials/luke-adamson.webp',
        alt: 'Luke Adamson photo',
        date: 'DECEMBER 15, 2024',
    },
    {
        id: '3',
        title: 'Erica Peterson',
        comment:
            'I\'ve never thought that I would like fishing so much! I had a great time. I especially liked that the boat is very clean, you do not risk getting dirty, there is almost no specific fishy smell. Everything is very nice and exciting even for an unprepared person.',
        image: '/img/testimonials/erica-peterson.webp',
        alt: 'Erica Peterson photo',
        date: 'FEBRUARY 04, 2024',
    },
    {
        id: '4',
        title: 'Jeff Setter',
        comment:
            'I bought a half-day tour as a gift for my girlfriend, she loves fishing. Both of us really liked it, it was a fascinating adventure. The guide told us a lot of interesting things about San Diego and the types of fish that live there. And I even caught a huge rock-fish!',
        image: '/img/testimonials/jeff-setter.webp',
        alt: 'Jeff Setter photo',
        date: 'MAY 25, 2024',
    },
];

function renderTestimonials(comments) {
    let testimonialsHtml = '';
    for (const com of comments) {
      testimonialsHtml += `
          <article class="testimonials__carousel-slide">
          <img src="${com.image}" alt="${com.alt}" loading="lazy" />
          <h3 class="testimonials__name">${com.title}</h3>
          <p class="testimonials__comment-text">
            <em>
              ${com.comment}
            </em>
          </p>
          <p class="testimonials__comment-date">${com.date}</p>
        </article>`;
    }
    document.querySelector('.testimonials__carousel-slides').innerHTML = testimonialsHtml;
  }
  
  renderTestimonials(comments);