import {useTransition} from 'stimulus-use';

export function addFadeTransition(controller, element) {
    useTransition(controller, {
        element,
        enterActive : 'fade-enter-active', /* These are css classes in app.css */
        enterFrom   : 'fade-enter-from',
        enterTo     : 'fade-enter-to',
        leaveActive : 'fade-leave-active',
        leaveFrom   : 'fade-leave-from',
        leaveTo     : 'fade-leave-to',
        hiddenClass : 'd-none' /* initial css class for the element */
    });
}