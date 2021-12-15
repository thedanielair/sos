langSwitch = document.querySelector('.lang')
langSwitchActive = document.querySelector('.lang__active');
langSwitchActive.addEventListener("click", function() {
    langSwitch.classList.toggle('active');
})




// let featureItems = document.querySelectorAll('.feature');
// if (featureItems.length > 0) {
//   for (let i = 0; i < featureItems.length; i++) {
//     const featureItem = featureItems[i];
//     const featureItemText = featureItem.lastElementChild.lastElementChild;
//     featureItemText.style.maxHeight = 0 + 'px';
//     // //Если .tour-featureItem__info содержит блок с классом .tour-featureItem__photos, добавляем к .tour-featureItem__text класс _compressed
//     // if (featureItemText.lastElementChild.classList.contains('tour-featureItem__photos')) {
//     //   featureItemText.firstElementChild.classList.add('_compressed');
//     // }
//     featureItem.addEventListener("click", function(e) {
//       if (!featureItem.parentElement.classList.contains('_disabled')) {
//         featureItem.classList.toggle('feature--active');
//         if (featureItemText.style.maxHeight !== "0px") {
//           featureItemText.style.maxHeight = "0px";
//         } else {
//           featureItemText.style.maxHeight = featureItemText.scrollHeight + 'px';
//         }
//       }
//     //   //Блокируем день на определенное время после клика
//     //   if (!featureItem.parentElement.classList.contains('_disabled')) {
//     //     function disablefeatureItem(e) {
//     //       featureItem.parentElement.classList.add('_disabled');
//     //       setTimeout(function(e){
//     //         featureItem.parentElement.classList.remove('_disabled');
//     //       }, 500)
//     //     }
//     //     disablefeatureItem();
//     //   }
//     });
//   }
// }






let featureItems = document.querySelectorAll('.feature');
let featureItemsArr = [];
// let active = null;
// let active2 = null;
featureItems.forEach(function(item, i){
    featureItemsArr.push(item);
})

featureItemsArr.forEach(function(item,i){
    let text = item.lastElementChild.lastElementChild;
    
    text.style.maxHeight = 0 + 'px';
    item.addEventListener("click", () => {
      if (!item.classList.contains('feature--disabled')) {
        item.classList.toggle('feature--active');
        if (text.style.maxHeight !== "0px") {
          text.style.maxHeight = "0px";
          active = null;
        //   console.log(active);
        } else {
          text.style.maxHeight = text.scrollHeight + 'px';
          active = i;
        //   console.log(active);
        //   if (active !== null) {
        //       console.log(featureItemsArr[active]);
        //       console.log(active);
            // featureItemsArr[active].classList.toggle('feature--active');
        //   }
          
        }
      }
    });
})