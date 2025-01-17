// typinf animation
var typed = new Typed('.typing', {
    strings: ['Web Developer'],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});
// aside
const nav = document.querySelector("nav");
     navList = nav.querySelectorAll("li");
     totalNavList = navList.length;
     for(let i=0; i<totalNavList; i++)
     {
         const a = navList[i].querySelector("a");
         a.addEventListener("click", function()
        {
             // remove back section
             removeBackSection();
             for(let j=0; j<totalNavList; j++)
             {
                navList[j].querySelector("a").classList.remove("active");
             }
             this.classList.add("active")
             showSection(this);
        })
     }    
     function showSection(element)
     {
        console.log(element);
     }
    