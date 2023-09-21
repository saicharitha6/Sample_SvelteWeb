import { writable } from "svelte/store";

export const activeSteps = writable({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
});

export const appDetails = writable({
    appName: "",
    orgName: "",
    orgNamespace: "",
    logo: "",
    icon: "",
    logoBase64: "",
    iconBase64: "",
    primaryColor: "#4AB781",
    secondaryColor: "#B6ECCD",
    splashColor: "#4AB781",
    drawerColor: "",
    policyUrl: "",
    contact: "",
    email: "",
    app_logo_aspect_ratio: 0
})
