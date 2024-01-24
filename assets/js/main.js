//sidebar dropdown

$(document).ready(function () {
  $(".sidebar_submenu").click(function () {
    $(".sub_menu").slideToggle(500);
  });
});

// // active
// $(document).ready(function(){
//   $('ul li a').click(function(){
//     $('li a').removeClass("active");
//     $(this).addClass("active");
// });
// });


// profile

$(document).ready(function () {
  $(".image").click(function () {
    $(".user_info").slideToggle(500);
  });
});

// side bar

var mobile_menu = document.querySelector(".humberger");
var sidebar = document.querySelector(".sidebar");
var menu_close=document.querySelector(".close_btn")

mobile_menu.onclick = function () {
  sidebar.classList.toggle("active");
};
menu_close.onclick = function () {
  sidebar.classList.toggle("active");
};

// chart-1
var options = {
  series: [
    {
      name: "Boys",
      data: [44, 55, 60, 56, 61, 58, 114, 60, 66],
    },
    {
      name: "Girls",
      data: [76, 85, 55, 98, 87, 64, 91, 114, 94],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },

  fill: {
    opacity: 1,
  },
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

// chart-2
var options = {
  series: [
    {
      name: "Teacher",
      data: [31, 40, 55, 50, 42, 89, 100],
    },
    {
      name: "Student",
      data: [11, 32, 45, 70, 34, 52, 110],
    },
  ],
  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  // xaxis: {
  //   type: 'datetime',
  //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  // },
  // tooltip: {
  //   x: {
  //     format: 'dd/MM/yy HH:mm'
  //   },
  // },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  smartSpeed: 900,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// upload pic
function readURL(input) {
  if (input.files && input.files[0]) {
    var render = new FileReader();
    render.onload = function (e) {
      $("#pic").attr("src", e.target.result);
    };
    render.readAsDataURL(input.files[0]);
  }
}


	
