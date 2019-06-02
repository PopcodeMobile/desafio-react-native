// @flow
import { Toast } from "native-base";
type toastType = "success" | "error" | "warning";

const showToast = (
    message: text,
    type: toastType,
    duration?: number = 5000
) => {
    Toast.show({
        text: message,
        duration,
        position: "top",
        type,
        style: { marginTop: 3 },
        textStyle: { textAlign: "center" },
        buttonText: "Ok"
    });
};

export default showToast;
