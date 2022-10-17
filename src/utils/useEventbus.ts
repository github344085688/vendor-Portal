import { onUnmounted } from 'vue'
import mitt from 'mitt'

type Eventbus = {
    customEmit: (eventName: string, agr?: any) => void
    customOn: (eventName: string, callback: Function) => void
}

const emitter: any = mitt();

const customEmit = (eventName: string, arg?: any) => {
    emitter.emit(eventName,arg)
};

const customOn = (eventName: string, callback: Function ) => {
    emitter.on(eventName, (arg: any) => callback(arg))
};


export const useEventbus = ():  Eventbus => {
    onUnmounted(() => {
        emitter.all.clear()
    });

    return {
        customEmit,
        customOn
    }
};
