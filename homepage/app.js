$('#user').hide()
$('#signup-modal').hide()
$('#login-modal').hide()
$('#contact_us').hide()

$(function(){
  $('#create-acc').click(function(){
    $('#login-modal').hide()
    $('#signup-modal').show()
  })
})

$(function(){
  $('#login').click(function(){
    $('#login-modal').show()
  }) 
})

$(function(){
  $('#main__btn').click(function(){
    $('#contact_us').show()
  }) 
})

$(function(){
  $('.signup-show').click(function(){
    $('#signup-modal').show()
  }) 
})

$(function(){
  $('#close-signup').click(function(){
    $('#signup-modal').hide()
  }) 
})

$(function(){
  $('#close-login').click(function(){
    $('#login-modal').hide()
  }) 
})

$(function(){
  $('#close-contact').click(function(){
    $('#contact_us').hide()
  }) 
})

$(function(){
  $('#submit-btn').click(function(){
    if(!$("#email").val() || !$("#password").val()) {
      if(!$("#email").val()){
        $("#email").addClass("error")
      } else {
        $("#email").removeClass("error")
      }

      if(!$("#password").val()){
        $("#password").addClass("error")
      } else {
        $("#password").removeClass("error")
      }
      
    } else {
      $("#email").removeClass("error")
      $("#password").removeClass("error")

      $('#login-modal').hide()
      $('#user').show()
      $('#login').hide()
      $('#sign-off').hide()
    }
  }) 
})

$(function(){
  $('#openSignup').click(function(){
    if(!$('#name').val()|| !$('#email_signup').val() || !$('#password_signup').val()|| !$('#confirm_password').val()){
      console.log('got a problem')
      if(!$('#name').val()){
        $("#name").addClass("error")
      } else {
        $("#name").removeClass("error")
      }
      if(!$("#email_signup").val()){
        $("#email_signup").addClass("error")
      } else {
        $("#email_signup").removeClass("error")
      }
      if(!$("#password_signup").val()){
        $("#password_signup").addClass("error")
      } else {
        $("#password_signup").removeClass("error")
      }
      if(!$("#confirm_password").val()){
        $("#confirm_password").addClass("error")
      } else {
        $("#confirm_password").removeClass("error")
      }
    } else {
      if($('#password_signup').val() != $('#confirm_password').val()){
        $("#password_signup").addClass("error")
        $("#confirm_password").addClass("error")
      } else {
        $("#password_signup").removeClass("error")
        $("#confirm_password").removeClass("error")

        $("#email_signup").removeClass("error")
        $("#password_signup").removeClass("error")

        $('#signup-modal').hide()


        $('#user').show()
        $('#login').hide()
        $('#sign-off').hide()
      }
    }
  })
})




const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const shopsMenu = document.querySelector('#shops-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    shopsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3400) {
    shopsMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } 

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);


function handleSubmit(e) {
  e.preventDefault();
  if (!nameInp.value) {
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message")
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }
}