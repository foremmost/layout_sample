import G_G from "./libs/G_G.js";
import { G_Bus } from "./libs/G_Control.js";

class Front extends G_G{
  constructor(){
    super();
    const _ = this;
    // G_Bus
  }
  define(){
    const _ = this;
    _.componentName = 'front';
    G_Bus.on(_,['closePopup','showForm','showHalf','closeHalf']);

  }
  showForm({item}){
    const _  =this;
    let popupId = item.getAttribute('data-popup');
    let isLarge = item.hasAttribute('data-islarge');

    if(isLarge){
      _.showPopup(popupId,true);
    }else{
      _.showPopup(popupId);
    }



    //data-click="front:showPopup" data-popup='change-password'
  }
  showPopup(popupId,large=false){
    const _ = this;
    let
      popup = _.f('#popup');
    if(!popup) return void 0;
    popup.classList.add('-opened');

    let
      popupInner = popup.querySelector('#popup-inner'),
      popupBody = popup.querySelector('#popup-body');
    _.popupContent = _.f(`${popupId}`)
    popupBody.append(_.popupContent);
    if(large){
      popupInner.classList.add('-large');
    }else{
      popupInner.classList.remove('-large');
    }
  }
  showHalf({item}){
    const _ =  this;
    let popupId = item.getAttribute('data-popup');
    let isLarge = item.hasAttribute('data-islarge');
    if(!popupId){
      popupId = '#update-form'
    }
    _.f(popupId)?.classList.add('-opened')
  }
  closeHalf({item}){
    const _ =  this;
    _.f('#update-form').classList.remove('-opened')
  }
  closePopup(){
    const _ = this;
    let
      popup = _.f('#popup');
    if(!popup) return void 0;
    popup.classList.remove('-opened');
    _.f('#popup-temp').append(_.popupContent);
  }
}

new Front();