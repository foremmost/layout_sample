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
    G_Bus.on(_,['closePopup','showForm','showHalf','closeHalf','showMobileMenu','openMenuItem']);

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
    document.body.style.overflow = 'hidden';
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
    document.body.style.overflow = 'hidden';
    if(!popupId){
      popupId = '#update-form'
    }
    _.f(popupId)?.classList.add('-opened')
  }
  showMobileMenu({item}){
    const _ =  this;
    let mobileMenu = _.f(".head-mobile-menu-cont");
    if (mobileMenu.classList.contains('-show')) {
      mobileMenu.classList.remove('-show');
      document.body.style.overflow = 'auto';
    } else {
      mobileMenu.classList.add('-show');
      document.body.style.overflow = 'hidden';
    }
  }
  openMenuItem({item}){
    const _ = this;
    item.classList.toggle('menu-active')
  }
  closeHalf({item}){
    const _ =  this;
    let popupId = item.getAttribute('data-popup');
    if(!popupId){
      popupId = '#update-form'
    }
    document.body.style.overflow = 'auto';
    _.f(popupId)?.classList.remove('-opened')
  }
  closePopup(){
    const _ = this;
    let
      popup = _.f('#popup');
    if(!popup) return void 0;
    popup.classList.remove('-opened');
    document.body.style.overflow = 'auto';
    _.f('#popup-temp').append(_.popupContent);
  }
}

new Front();