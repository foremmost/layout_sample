import { MainEventBus } from "./libs/MainEventBus.lib.js";
import { Modaler } from "./libs/Modaler.lib.js";
import { _front } from "./libs/_front.js";
class Front extends _front{
  constructor(){
    super();
    const _ = this;
    MainEventBus
      .on(_,'select')
      .on(_,'selectFilter')
      .on(_,'createOrderSuccess')
      .on(_,'createOrderFail');
  }
  createOrderSuccess(orderData){}
  createOrderFail(orderData){}

  select (clickData) {
    const _ = this;
    let select = clickData.item,
      target = clickData.event.target;

    _.closeAllSelects(select);
    target = _.getParent(target,['BUTTON','INPUT'],'tagName');
    if (!target) return;
    let tcls = target.className;
    if (tcls === 'select-head-item' || tcls === 'select-dropdown-item') {
      select.classList.toggle('active');

      if (tcls !== 'select-head-item') {
        let head = select.querySelector('.select-head-item');
        if (head.tagName !== 'INPUT') {
          let headSpan = select.querySelector('.select-head-item span');
          headSpan.textContent = target.firstElementChild.textContent;
        } else {
          head.value = target.firstElementChild.textContent;
        }

        let selectInput = select.querySelector('.select-input-item');
        selectInput.value = target.getAttribute('data-value');
      }
    }
  }
  closeAllSelects (exception = null) {
    let selects = document.querySelectorAll('.select');
    selects.forEach(function (select){
      if (select !== exception) select.classList.remove('active');
    })
  }
  selectFilter(changeData){
    let
      input = changeData.item,
      value = input.value.toLowerCase(),
      dropdown = input.closest('.select').querySelector('.select-dropdown'),
      options = dropdown.children;

    for (let option of options) {
      let optionText = option.firstElementChild.textContent.toLowerCase();
      if (optionText.indexOf(value) < 0) {
        option.setAttribute('style','display:none;')
      } else option.removeAttribute('style');
    }
  }
}
new Front();
