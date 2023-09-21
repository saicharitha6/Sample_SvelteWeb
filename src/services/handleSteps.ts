import { activeSteps } from "../stores/store";

export const handleSteps = (step) => {
    let obj = {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        step6: false,
        step7: false,
    };

    obj[step] = true;
    activeSteps.set(obj)
}