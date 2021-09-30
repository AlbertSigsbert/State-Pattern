const pageState = function ()  {
  let currentState = new homePage(this);

  this.init = function () {
      this.change(new homePage);
  }

  this.change = function (state) {
      currentState = state;
  }
};


//States

//Homepage
const homePage = function (page) {
  document.getElementById("heading").textContent = null;
  document.getElementById("content").innerHTML = `
      
  <div class="px-4 py-5 my-5 text-center">
  <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
  <h1 class="display-5 fw-bold">Centered hero</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
      <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
    </div>
  </div>
  </div>
    `;
};

//About
const aboutPage = function (page) {
    document.getElementById( "heading").innerHTML = `<h1 class="display-5 fw-bold text-center">About Page</h1>`;
    document.getElementById("content").innerHTML = `
      <p class="lead mb-4 text-center">
       This is the About Page
      </p>
      `;
};

//Contact
const contactPage = function (page) {
    document.getElementById( "heading").innerHTML = `<h1 class="display-5 fw-bold text-center">Contact Page</h1>`;
    document.getElementById("content").innerHTML = `
    <!-- Wrapper container -->
    <div class="container py-4">
    
      <!-- Bootstrap 5 starter form -->
      <form id="contactForm">
    
        <!-- Name input -->
        <div class="mb-3">
          <label class="form-label" for="name">Name</label>
          <input class="form-control" id="name" type="text" placeholder="Name" />
        </div>
    
        <!-- Email address input -->
        <div class="mb-3">
          <label class="form-label" for="emailAddress">Email Address</label>
          <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
        </div>
    
        <!-- Message input -->
        <div class="mb-3">
          <label class="form-label" for="message">Message</label>
          <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
        </div>
    
        <!-- Form submit button -->
        <div class="d-grid">
          <button class="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
    
      </form>
    
    </div>
      `;
};


//Instantiate page state
const page = new pageState();

//Init first state
page.init();

//Page Vars
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

//Event Listeners
home.addEventListener('click', e => {
    page.change(new homePage);
    e.preventDefault();
})

about.addEventListener('click', e => {
    page.change(new aboutPage);
    e.preventDefault();
})

contact.addEventListener('click', e => {
    page.change(new contactPage);
    e.preventDefault();
})