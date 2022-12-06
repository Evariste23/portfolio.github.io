
const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });


  const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-btn');
  const menu = document.querySelector('nav .container ul');

  menuBtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  })

  closeBtn.addEventListener('click', () =>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  })

  const navItem = menu.querySelectorAll('li');
  const changeActiveItem = () => {
    navItem.forEach(Item => {
        const link = Item.querySelector('a');
            link.classList.remove('active');
        })
  }
  navItem.forEach(Item => {
    const link = Item.querySelector('a');
    link.addEventListener('click',() =>{
        changeActiveItem ();
        link.classList.add('active');
    })
  })

  const readMoreBtn = document.querySelector('.read-more');
  const readMoreContent = document.querySelector('.read-more-contant');
 
  readMoreBtn.addEventListener('click',() =>{
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')){
      readMoreBtn.textContent = 'show less';   
    }
    else{
      readMoreBtn.textContent = 'show more';
    }
  })

  const SkillItem = document.querySelectorAll('section.skills .skill');
   SkillItem.forEach(skil =>{
   skil.querySelector('.head').addEventListener('click', () =>{
     skil.querySelector('.items').classList.toggle('show-item');
   })
  })

  window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY 
    > 0)
  })


  
