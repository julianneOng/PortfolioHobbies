const hobbies = [
  {
    title: "Photography",
    description: "Capturing moments through the lens.",
    image: "https://i.etsystatic.com/17521873/r/il/27fb56/4794180029/il_1588xN.4794180029_llgl.jpg"
  },
  {
    title: "Painting",
    description: "Expressing creativity with colors.",
    image: "https://th.bing.com/th/id/R.d8030d1943c876913bbda704bade80a6?rik=E%2fRHixGeJ1KA5A&riu=http%3a%2f%2frhythmartgallery.com%2fwp-content%2fuploads%2f2020%2f09%2fM-Ishaq-16-x-16-inches-Acrylic-on-canvas-Landscape-Nature-Painting-9.jpeg&ehk=2nZc5kJ3%2fJzeO73vcdKCSuVmcRC8IWcsbhbyvcdPlA0%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    title: "Cycling",
    description: "Exploring the world on two wheels.",
    image: "https://i.pinimg.com/originals/e8/fa/e2/e8fae28da92baa393b928c0574a936e5.jpg"
  },
  {
    title: "Gaming",
    description: "Immersive adventures and strategic fun.",
    image: "https://th.bing.com/th/id/OIP.4WmD43yOKC-S77q5bvjPlAAAAA?rs=1&pid=ImgDetMain&cb=idpwebpc2"
  }
];

const container = document.getElementById('hobby-cards');

hobbies.forEach(hobby => {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-4 mb-4';

  col.innerHTML = `
    <div class="card h-100">
      <img src="${hobby.image}" class="card-img-top" alt="${hobby.title}">
      <div class="card-body">
        <h5 class="card-title">${hobby.title}</h5>
        <p class="card-text">${hobby.description}</p>
      </div>
    </div>
  `;
  container.appendChild(col);
});
