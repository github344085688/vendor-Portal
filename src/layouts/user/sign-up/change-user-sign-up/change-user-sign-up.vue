<template>
    <div class="sig-in-box" >
        <div class="d-flex media-t-3 mediaju-center-to-left f-b " style="font-size: 32px; ">
            Select your Vendor account
        </div>
        <div class="d-flex mt-4 mediaju-center-to-left  align-items-center ">
            Already have an account?
            <button class="unis-btn unis-btn-text" @click.stop.prevent="onSignInOrUp('Sign in')">Sign in</button>
        </div>
        <div class="d-flex mt-4 justify-content-center ">
            <div class="col-4 br-ra4 br-1 br-grey100 unis-modal-select pt-5 pb-5 mr-3 cursor-p"
                 @click.stop.prevent="onChangeUser('Existing customer')">
                <div class="d-flex justify-content-center align-items-center">
                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37.5" cy="37.5" r="37.5" fill="#EAFFF2"/>
                        <path d="M36.9997 37.0002C41.6038 37.0002 45.333 33.271 45.333 28.6668C45.333 24.0627 41.6038 20.3335 36.9997 20.3335C32.3955 20.3335 28.6663 24.0627 28.6663 28.6668C28.6663 33.271 32.3955 37.0002 36.9997 37.0002ZM36.9997 41.1668C31.4372 41.1668 20.333 43.9585 20.333 49.5002V53.6668H53.6663V49.5002C53.6663 43.9585 42.5622 41.1668 36.9997 41.1668Z"
                              fill="#268C55"/>
                    </svg>

                </div>
                <div class="d-flex f-b mt-2 justify-content-center ">New customer</div>
            </div>
            <div class="col-4 br-ra4 br-1 br-grey100 unis-modal-select pt-5 pb-5 ml-3 cursor-p"
                 @click.stop.prevent="onChangeUser('Existing customer')">
                <div class="d-flex justify-content-center align-items-center">
                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37.5" cy="37.5" r="37.5" fill="#F9F9FF"/>
                        <path d="M36.9997 37.0002C41.6038 37.0002 45.333 33.271 45.333 28.6668C45.333 24.0627 41.6038 20.3335 36.9997 20.3335C32.3955 20.3335 28.6663 24.0627 28.6663 28.6668C28.6663 33.271 32.3955 37.0002 36.9997 37.0002ZM36.9997 41.1668C31.4372 41.1668 20.333 43.9585 20.333 49.5002V53.6668H53.6663V49.5002C53.6663 43.9585 42.5622 41.1668 36.9997 41.1668Z"
                              fill="#009BD9"/>
                    </svg>


                </div>
                <div class="d-flex f-b mt-2 justify-content-center ">Existing customer</div>
            </div>

        </div>
        <div style="height: 200px;"></div>
    </div>

</template>
