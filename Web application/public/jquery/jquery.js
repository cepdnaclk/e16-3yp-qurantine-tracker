$('.nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass('active');

})


const tabBtn = document.querySelectorALl('.nav ul li');
const tab = document.querySelectorALl('.tab');

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = 'none';
    });
    tabs[panelIndex].style.display = 'block';
}
tabs(0);