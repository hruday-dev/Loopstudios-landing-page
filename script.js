const menu = document.getElementById('menu');
const menuopen = document.getElementById('menu-open');
const menuclose = document.getElementById('menu-close');

menuopen.addEventListener('click',(e)=>{
    e.preventDefault();
    menu.style.display='block';
    document.body.style.overflow='hidden';
})
menuclose.addEventListener('click',(e)=>{
    e.preventDefault();
    menu.style.display='none';
})
