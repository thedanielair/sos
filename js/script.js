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






// let featureItems = document.querySelectorAll('.feature');
// let featureItemsArr = [];
// let active = null;
// // let active2 = null;
// featureItems.forEach(function(item, i){
//     featureItemsArr.push(item);
// })

// function turnUp(obj) {
//     obj.style.maxHeight = "0px";
//     active = null;
//     console.log('я нулевый чел')
// }

// featureItemsArr.forEach(function(item,i){
//     let text = item.lastElementChild.lastElementChild;
    
//     text.style.maxHeight = 0 + 'px';
//     item.addEventListener("click", () => {
//       if (!item.classList.contains('feature--disabled')) {
//         item.classList.toggle('feature--active');
//         if (!item.classList.contains('feature--active')) {
//           turnUp(text);
//         } else {
//           text.style.maxHeight = text.scrollHeight + 'px';
//           if (active !== null) {
//               featureItemsArr[active].classList.toggle('feature--active');
//               turnUp(text);
//               active = i; 
//           } else { 
//               active = i;
//               console.log('я взял номер')
//           } 
//         }
//       }
//     });
// })



//==============================================//

function massivePush(list, massive) {
    list.forEach(function(item){
    massive.push(item);
    return massive;
})
}
//------------------------------------//
let featureArr = [];     //main massive
const FEATURE_ITEMS = document.querySelectorAll('.feature');
const FEATURE_TEXTS = document.querySelectorAll('.feature__text');
const FEATURE_POINTS = document.querySelectorAll('.feature__point');
//------------------------------------//
const createArr = function() {
    //obj
    let featureItemsArr = [];
    massivePush(FEATURE_ITEMS, featureItemsArr);
    //text
    let featureTextsArr = [];
    massivePush(FEATURE_TEXTS, featureTextsArr);
    //point   
    let featurePointsArr = [];
    massivePush(FEATURE_POINTS, featurePointsArr);
    //massive push
    featureItemsArr.forEach((item, i) => {
        let feature = {};

        feature.elem = item;
        feature.text = featureTextsArr[i];
        feature.point = featurePointsArr[i];

        featureArr[i] = feature;
    });
};
createArr();
console.log(featureArr);

//----------------------------------------------//

//----------------------------------------------//

function collapseUp(obj) {
    obj.style.maxHeight = "0px";
}
function collapseDown(obj) {
    obj.style.maxHeight = obj.scrollHeight + 'px';
}
function toggleClass(obj, className) {
    obj.classList.toggle(className);
}
function collapseToggle(parent, content, className) {
    toggleClass(parent, className);
    if (parent.classList.contains(className)) {
        collapseDown(content);
    } else {
        collapseUp(content);
    }
}
function listenClick(massive, item, className, i) {
    item.elem.addEventListener("click", () => {
        collapseToggle(item.elem, item.text, className)
    });
}

//:::::::::::::::::::::::::::::::::::://
let active = null;
function acc(massive, className) {
    for (i=0;i<massive.length;i++) {
        collapseUp(massive[i].text);                //collapse texts
        listenClick(massive, massive[i], className, i);      //click listener
    };
}
acc(featureArr, "feature--active");
//:::::::::::::::::::::::::::::::::::://

//==============================================//