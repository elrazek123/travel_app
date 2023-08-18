let flag="true";
let the_height_of_section2=$(".signers").offset().top;
let the_height_of_Section3=$(".calender").offset().top;
let the_height_of_section_four=$("footer").offset().top;
function define_opacity(height,ele)
{
    if($(window).scrollTop()==height)
    {
          $(ele).animate({
            opacity:"1",
          },2000);
          console.log("yes");
    }
    else{
        console.log("no");
    }
    console.log($(ele));
}
$(".iconss,.bn").click(function()
{ 
    if($("aside").css("display")==="flex")
    {
    console.log("hello world");
    $("aside").hide(1000,function(){
       $(".one").animate({
             left:"10px",
       },1000);
    });
     flag=false;
}
else{
    console.log("hello world");
    $(".one").animate({
        left:"190px",
  },1000,function()
  {
    $("aside").show(1000);
  });
     flag=true;
}
});
$(".sp").slideUp();
$(".spt").click(function(e)
{ 
        $(e.target).siblings("p").slideToggle(100,function()
        {
            $(e.target).parents(".ty").siblings(".ty").children("p").slideUp(250)
        });
});
window.setInterval(()=>
{
    let the_cqalender_date="October 10, 2024 11:13:00";
    let kl=new Date(the_cqalender_date);
    let new_date=new Date();
    let finl_date=kl.getTime()-new_date.getTime();
    let the_seconds=Math.ceil(finl_date/1000);
    let the_minutes=Math.ceil(the_seconds/60);
    let the_hours=Math.ceil(the_minutes/60);
    let the_days=Math.ceil(the_hours/24);
    $(".seconds").html(`<h3>${the_seconds}s</h3>`);
    $(".minutes").html(`<h3>${the_minutes}m</h3>`);
    $(".hours").html(`<h3>${the_hours}h</h3>`);
    $(".days").html(`<h3>${the_days}-d</h3>`);
},1000);
$("aside").hide();
$(".one").animate({
    left:"10px",
});
$("textarea").keyup(function (e){ 
    let the_number=Number($("textarea").val().length);
    console.log(the_number);
    let the_number_y=100;
    let the_difference;
    if(the_number>=the_number_y)
    {
        $(".we").text("your available character finished");
    }
    if(the_number<=100)
    {
  the_difference=the_number_y-the_number;
  $(".we").text(`${the_difference}`);
    }
});
$(document).ready(function()
{
  $(".layer_cover").slideUp(6000,function()
  {
    $("body,html").css({
        overflow:"visible",
    });
    $(".sk-chase").slideUp(1000);
  })
});
$(".link").click(function(e)
{
    let ele_go=$(e.target).attr("href");
    let ele_offset=$(ele_go).offset().top;
    $("body,html").animate({
        scrollTop:ele_offset,
    },1500,function()
    {
        console.log("i ready to it s")
    });
});
$(".top-icon").click(function()
{
    $("body,html").animate({
        scrollTop:"0px",
    },1800,function()
    {
        console.log("ie afdsfs");
    });
    
})
