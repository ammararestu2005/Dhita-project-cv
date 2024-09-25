<template>
    <div class="container mt-5">
      <header class="d-flex align-items-center mb-0" :style="{ backgroundColor: navBackground }">
        <nav class="navbar navbar-expand-lg w-100">
          <div class="container-fluid">
            <h1 class="me-auto p-3">My Profile</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="about">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About me</a></li>
                <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  
      <section :style="{ backgroundColor: aboutMeBackground }" class="p-4 d-flex flex-column flex-md-row align-items-center">
        <img 
          src="/profile.jpg" 
          alt="profil" 
          class="img-fluid rounded-circle mb-3 mb-md-0 me-md-3" 
          style="width: 140px; height: 140px;" 
        />
        <div class="col-md-9">
          <p class="text-justify">
            Ammara Restu Rahmadhita is student majoring in information technology at Brawijaya University.
            I have interest in sofware development and i also want to focus on mobile application development
            and artificial intelligence and i also aspire to contribute to the technology industry by creating
            solutions that benefit society.
          </p>
        </div>
      </section>

      <section id="portfolio" class="mt-4">
      <h2>Portfolio</h2>
      <ul class="list-group-item d-flex flex-wrap justify-content-start">
        <li class="list-inline-item m-2" style="border: none;">
          <img src="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1180058743.1727190684&semt=ais_hybrid/gambar1.jpeg" alt="Project 1" class="img-fluid" style="width: 300px; height: auto;">
          <p>Project  1</p>
        </li>
        <li class="list-group-item m-2" style="border: none;"> 
          <img src="https://img.freepik.com/free-vector/aesthetic-dreamy-background-purple-cloudy-sky-vector-glitter-design_53876-156334.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727136000&semt=ais_hybrid/gambar2.jpeg" alt="Project 2" class="img-fluid" style="width: 300px; height: auto;">
          <p>Project  2</p>
        </li>
        <li class="list-group-item m-2" style="border: none;">
          <img src="https://img.freepik.com/free-photo/pastel-background-with-aesthetic-pink-sky_53876-129588.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727136000&semt=ais_hybrid/gambar3.jpeg" alt="project 3" class="img-fluid" style="width: 300px; height: auto;">
          <p>project 3</p>
        </li>
      </ul>
    </section>
  
      <section class="mt-4 mb-4" id="skills" :style="{ backgroundColor: skillsBackground }">
        <div class="p-4">
          <h2>Skills</h2> <!-- Hapus class text-center -->
        <div> <!-- Hapus class text-center -->
          <p>JavaScript - Is a versatile programming that is mainly used to create interactive and dynamic content on web pages.</p>
          <p>HTML - Is a markup language used to create and organize the structure of content on web pages.</p>
          <p>Python - Is renowned for its simple and easy to read syntax developed to support fast and efficient programming.</p>
        </div>
    </div>
  </section>
  
  
      <section class="mt-4" id="contact">
        <form @submit.prevent="handleSubmit" class="border p-4 rounded" :style="{ backgroundColor: aboutMeBackground }">
          <div class="mb-3">
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="formData.email" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" v-model="formData.message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        aboutMeBackground: '#fff5f5',
        navBackground: '#fff5f5',
        skillsBackground: '#eadcdc',
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted:', this.formData);
        alert('Thank you for your message!');
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    },
    head() {
      return {
        title: 'My Profile - Nurmalia Fitria',
        meta: [
          { hid: 'description', name: 'description', content: 'Profile page of Nurmalia Fitria, an Information Technology student.' }
        ],
        link: [
          { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' }
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  h1, h2, h3 {
    color: #333;
    font-size: 36px;
    font-family: 'Times New Roman', Times, serif;
  }
  .text-justify {
    text-align: justify;
  }
  </style>