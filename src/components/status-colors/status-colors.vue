<template>
    <div  :style="{'background': bg ?bg:'none','color': color ? color:'inherit','display':fill?'block':'inline-block','text-align':fill?'center':'left'}"  style="padding: 2px;border-radius: 4px ">
          <slot></slot>
       </div>
</template>
