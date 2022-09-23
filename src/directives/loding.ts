/**
 * Created by f on 2022/9/22.
 */
import { Directive } from 'vue';
import { forEach } from 'lodash-es';

type Value = boolean;
export const loding: Directive<HTMLElement, Value> = {
    created(el: any, binding: any, vnode: any,) {
        if (binding.value) {
            el.style.position = 'relative';
            // console.log(el.className);
            let divEl = document.createElement('div');
            // el.setAttribute('style', "position: absolute; left:0; top:0px; width:100%");
            divEl.setAttribute('class', "directive-loding-box");
            divEl.innerHTML = `<div class="sk-fading-circle">
                                  <div class="sk-circle1 sk-circle"></div>
                                  <div class="sk-circle2 sk-circle"></div>
                                  <div class="sk-circle3 sk-circle"></div>
                                  <div class="sk-circle4 sk-circle"></div>
                                  <div class="sk-circle5 sk-circle"></div>
                                  <div class="sk-circle6 sk-circle"></div>
                                  <div class="sk-circle7 sk-circle"></div>
                                  <div class="sk-circle8 sk-circle"></div>
                                  <div class="sk-circle9 sk-circle"></div>
                                  <div class="sk-circle10 sk-circle"></div>
                                  <div class="sk-circle11 sk-circle"></div>
                                  <div class="sk-circle12 sk-circle"></div>
                                </div>`;
            el.insertBefore(divEl, el.children[0]);
        }
    },
    updated(el: any, binding: any) {
        if (!binding.value) {
            let removeNode: any = el.getElementsByClassName('directive-loding-box');
            if (removeNode.length > 0) {
                forEach(removeNode, (node: any) => el.removeChild(node))
            }
        }
    },
    beforeUnmount() {
    },
    unmounted() {},
};

export const butloding: Directive<HTMLElement, Value> = {
    created(el: any, binding: any, vnode: any,) {
        if (binding.value) {
            let divEl = document.createElement('div');
            divEl.setAttribute('class', "spinner");
            divEl.innerHTML = ` 
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
 `;
            el.appendChild(divEl);
        }
    },
    updated(el: any, binding: any) {
        if (!binding.value) {
            let removeNode: any = el.getElementsByClassName('but-loding');
            if (removeNode.length > 0) {
                forEach(removeNode, (node: any) => el.removeChild(node))
            }
        }
    },
    beforeUnmount() {
    },
    unmounted() {},
};


