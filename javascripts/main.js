new Glider(document.querySelector('.showcase__list'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    arrows: {
      prev: '.showcase__left',
      next: '.showcase__right'
    },
    
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 1000,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 423,
          duration: 0.5,
          arrows: {
            prev: '.showcase__left',
            next: '.showcase__right'
          },
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          duration: 0.5,
        },
        
      }
    ]
  });

  // This is a functions that scrolls to #{blah}link
function goToByScroll(id) {
  // Remove "link" from the ID
  id = id.replace("link", "");
  // Scroll
  $('html,body').animate({
      scrollTop: $("#" + id).offset().top
  }, 1000);
}

$("#sidebar > ul > li > a").click(function(e) {
  // Prevent a page reload when a link is pressed
  e.preventDefault();
  // Call the scroll function
  goToByScroll(this.id);
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOq1_Q4QcSBD-8T18P1rZR0b2AmCPByyM",
  authDomain: "teedesigns-0512.firebaseapp.com",
  databaseURL: "https://teedesigns-0512.firebaseio.com",
  projectId: "teedesigns-0512",
  storageBucket: "teedesigns-0512.appspot.com",
  messagingSenderId: "930524982758",
  appId: "1:930524982758:web:f35bf63429018497"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const formDOM = document.querySelector('.contact__forms');

formDOM.addEventListener('submit', (e)=>{
  e.preventDefault();
  
  const dbObject = {
    name: formDOM.name.value,
    phone: formDOM.phone.value,
    pack: formDOM.pack.value,
    message: formDOM.message.value,
  }
  

  db.collection('clients').add(dbObject).then(res=>{
    $('.warning').show(500);
  });

  formDOM.name.value = ''; 
  formDOM.phone.value = ''; 
  formDOM.pack.value = ''; 
  formDOM.message.value = ''; 

  setTimeout(()=>{
    $('.warning').hide(500)
  },10000)
})

$('.resMenu').on('click', function(){
  $('.header__nav').slideToggle(500);
})