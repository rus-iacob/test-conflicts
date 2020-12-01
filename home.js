function getDataFromServer() {
  fetch('https://run.mocky.io/v3/37abd45d-62fe-493f-92c6-d799b162a201')
    .then(getResponse)
    .then(showData)
}

function getResponse(response) {
  return response.json();
}

function showData(data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    displayItem(item, i);
  }
}

function displayItem(data, index) {

  let sliderContainer = $('.slider-content-wrapper');

  let sliderWrapperItem = $('<div/>', {
    id: data.id,
    "class": 'slider-wrapper',
    style: index != 0 ? "display:none" : ""
  });
  let sliderImgWrapper = $('<div/>', {
    "class": 'slider-img-wrapper'
  });
  let itemImg = $('<img/>', {
    src: data.img,
    alt: data.planetTitle
  });
  let imgText = $('<div/>', {
    "class": 'img-text-container'
  });
  let planetTitle = $('<p/>', {
    text: data.planetTitle
  });
  let system = $('<p/>', {
    text: data.belongsTo
  });
  let distance = $('<p/>', {
    text: 'Distance: ' + data.distance
  });
  let population = $('<p/>', {
    text: 'Population: ' + data.population
  });
  let rectangleContainer = $('<div/>', {
    "class": 'rectangle-details-container'
  });
  let rectangleContainerTop = $('<div/>', {
    "class": 'rectangle-details-container-top'
  });
  let rectangleTitle = $('<p/>', {
    "class": 'rectangle-details-title',
    text: data.planetTitle
  });
  let rectangleDetailsText = $('<div/>', {
    "class": 'rectangle-details-text'
  });
  let paragraph1 = $('<p/>', {
    text: data.text1
  });
  let paragraph2 = $('<p/>', {
    text: data.text2
  });
  let rectangleContainerBottom = $('<div/>', {
    "class": 'rectangle-details-container-bottom'
  });
  let rectanglePrice = $('<p/>', {
    "class": 'rectangle-details-price',
    text: data.ticketPrice
  });
  let rectangleDetails = $('<p/>', {
    text: data.ticketDetails
  });
  let rectangleDetailsBtn = $('<button/>', {
    "class": 'rectangle-details-btn',
    text: 'BUY'
  })

  sliderWrapperItem.appendTo(sliderContainer);
  sliderImgWrapper.appendTo(sliderWrapperItem);
  itemImg.appendTo(sliderImgWrapper);
  imgText.appendTo(sliderImgWrapper);
  planetTitle.appendTo(imgText);
  system.appendTo(imgText);
  distance.appendTo(imgText);
  population.appendTo(imgText);
  rectangleContainer.appendTo(sliderWrapperItem);
  rectangleContainerTop.appendTo(rectangleContainer);
  rectangleTitle.appendTo(rectangleContainerTop);
  rectangleDetailsText.appendTo(rectangleContainerTop);
  paragraph1.appendTo(rectangleDetailsText);
  paragraph2.appendTo(rectangleDetailsText);
  rectangleContainerBottom.appendTo(rectangleContainer);
  rectanglePrice.appendTo(rectangleContainerBottom);
  rectangleDetails.appendTo(rectangleContainerBottom);
  rectangleDetailsBtn.appendTo(rectangleContainerBottom)
}

function showNextSlide() {
  $('.slider-content-wrapper > .slider-wrapper:first-child')
    .fadeOut(500)
    .next()
    .delay(500)
    .fadeIn(500)
    .end()
    .appendTo('.slider-content-wrapper');
}

function showPreviuosSlide() {
  $('.slider-content-wrapper > .slider-wrapper:first-child')
    .fadeOut(500)
  $('.slider-content-wrapper > .slider-wrapper:last-child')
    .prependTo(".slider-content-wrapper")
    .delay(500)
    .fadeIn(500)
}

function switchDarkMode() {
  $('.main-area').toggleClass('dark-mode');
  $('.rectangle-details-text > p').toggleClass('light-mode-text');
  $('.product-description-container > p').toggleClass('light-mode-text');
  $('.rectangle-details-title').toggleClass('light-mode-text');

  $('.dark-mode-btn svg').toggleClass('hidden');
}

function hideProductDescriptionContainerText() {
  $('.product-description-container').click(function (event) {
    $(this).find('.hide-description').slideToggle(500)
    event.stopPropagation();
  });
}

$(document).ready(function () {

  getDataFromServer();

  $('.slider-btn-right').click(showNextSlide);
  $('.slider-btn-left').click(showPreviuosSlide);
  $('.mobile-slider-left').click(showNextSlide);
  $('.mobile-slider-right').click(showPreviuosSlide);
  $('.dark-mode-btn').click(switchDarkMode);
  hideProductDescriptionContainerText();
})