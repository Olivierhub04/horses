//home-banner-slide

$('.home-banner-slide').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    margin: 10,
    // autoplay:1500,
    responsive: {
        0: {
            items: 1,
        },
        320: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})

// testimonial

$('.testimonial-slide').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    margin: 15,
    // autoplay:1500,
    responsive: {
        0: {
            items: 1,
        },
        320: {
            items: 1,
        },
        600: {
            items: 1,
        },
        750: {
            items: 1,
        },
        950:{
          items:1,
        },
        1000: {
            items: 2,
        },
        1150: {
            items: 3,
        }
    }
})

//password eye show close

$(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});


// range slider

// function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
//     const [from, to] = getParsed(fromInput, toInput);
//     fillSlider(fromInput, toInput, '#A4A4A4', '#B7973E', controlSlider);
//     if (from > to) {
//         fromSlider.value = to;
//         fromInput.value = to;
//     } else {
//         fromSlider.value = from;
//     }
// }

// function controlToInput(toSlider, fromInput, toInput, controlSlider) {
//     const [from, to] = getParsed(fromInput, toInput);
//     fillSlider(fromInput, toInput, '#A4A4A4', '#B7973E', controlSlider);
//     setToggleAccessible(toInput);
//     if (from <= to) {
//         toSlider.value = to;
//         toInput.value = to;
//     } else {
//         toInput.value = from;
//     }
// }

// function controlFromSlider(fromSlider, toSlider, fromInput) {
//   const [from, to] = getParsed(fromSlider, toSlider);
//   fillSlider(fromSlider, toSlider, '#A4A4A4', '#B7973E', toSlider);
//   if (from > to) {
//     fromSlider.value = to;
//     fromInput.value = to;
//   } else {
//     fromInput.value = from;
//   }
// }

// function controlToSlider(fromSlider, toSlider, toInput) {
//   const [from, to] = getParsed(fromSlider, toSlider);
//   fillSlider(fromSlider, toSlider, '#A4A4A4', '#B7973E', toSlider);
//   setToggleAccessible(toSlider);
//   if (from <= to) {
//     toSlider.value = to;
//     toInput.value = to;
//   } else {
//     toInput.value = from;
//     toSlider.value = from;
//   }
// }

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

// function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
//     const rangeDistance = to.max-to.min;
//     const fromPosition = from.value - to.min;
//     const toPosition = to.value - to.min;
//     controlSlider.style.background = `linear-gradient(
//       to right,
//       ${sliderColor} 0%,
//       ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
//       ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
//       ${rangeColor} ${(toPosition)/(rangeDistance)*100}%,
//       ${sliderColor} ${(toPosition)/(rangeDistance)*100}%,
//       ${sliderColor} 100%)`;
// }

// function setToggleAccessible(currentTarget) {
//   const toSlider = document.querySelector('#toSlider');
//   if (Number(currentTarget.value) <= 0 ) {
//     toSlider.style.zIndex = 2;
//   } else {
//     toSlider.style.zIndex = 0;
//   }
// }

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
// fillSlider(fromSlider, toSlider, '#A4A4A4', '#B7973E', toSlider);
// setToggleAccessible(toSlider);

// fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
// toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
// fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
// toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);


// checkbox

let checkAll = document.getElementById('check-all')
let otherCheckboxes = document.querySelectorAll('input[type=checkbox]:not(#check-all)')

// checkAll.addEventListener('change', onCheckAllChange)
otherCheckboxes.forEach(input => input.addEventListener('change', onOtherCheckboxChange))

// function onCheckAllChange() {
//   otherCheckboxes.forEach((input) => input.checked = checkAll.checked)
// }

function onOtherCheckboxChange() {
  let allChecked = Array.from(otherCheckboxes).every(input => input.checked);
  checkAll.checked = allChecked;
}



