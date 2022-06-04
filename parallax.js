const scrollProgressElement=document.querySelector("#scroll-progress");
const scrollProgressElement2=document.querySelector("#scroll-progress2");
const element=document.getElementById("scroll-progress")
function scrollProgress(){
    const totalheightofwebpage=document.body.scrollHeight;
    const currentdistancefromtop=document.documentElement.scrollTop;
    const windowheight=document.documentElement.clientHeight;
    const scrolledpercentage=(currentdistancefromtop/(totalheightofwebpage-windowheight)*100);

    scrollProgressElement.style.height = Math.round(scrolledpercentage)+'%';
    scrollProgressElement2.style.width = Math.round(scrolledpercentage)+'%';
    
    element.textContent='_'+Math.round(scrolledpercentage)+'%';
}



document.addEventListener ('scroll', scrollProgress);

function openSlideMenu(){
    document.getElementById("side-menu").style.width='180px';
    document.getElementById("main").style.marginLeft='250px';
}

function closeSlideMenu(){
    document.getElementById("side-menu").style.width='0';
    document.getElementById("main").style.marginLeft='0';
}