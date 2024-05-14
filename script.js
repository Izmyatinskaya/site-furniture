let l1 = document.querySelector('.slider');
const burger = document.querySelector('.burger');
const line1 = document.querySelector('.burger img:nth-child(1)');
const line2 = document.querySelector('.burger img:nth-child(2)');
const line3 = document.querySelector('.burger img:nth-child(3)');
const block = document.querySelector('.header-col2');
let images = document.querySelectorAll('.slider  img');
let x = -270;
let c=0;
burger.addEventListener('click', () => {
    line3.classList.toggle('active3');
    line2.classList.toggle('active2');
    line1.classList.toggle('active');
    block.classList.toggle('head-active');
  });
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



    
    