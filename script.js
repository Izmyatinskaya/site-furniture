let l1 = document.querySelector('.slider');
let x = -270;
let c=0;
function move()
{
    if (window.matchMedia("(max-width: 767px)").matches)
    {
        if(c < 5)
        {
            l1.style.transform = `translateX(${x}px)`;
            x = x-270;
            c++;
            if(c == 5) {
                c = 6;
                x = x + 270*2;
            }
        }
        else if(c >= 6 && c < 12)
        {
            l1.style.transform = `translateX(${x}px)`;
            x = x+270;
            c++;
            if(c == 11)
            {
                c =0;
                x = x - 270*2
            }
        }
    }
}
    
    