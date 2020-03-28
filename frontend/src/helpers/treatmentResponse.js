import { toast } from "react-toastify";

const treatmentResponse = object => {
  toast.dismiss();

  object.map(objMsg => {
    switch (objMsg.type) {
      case "error":
        toast.error(objMsg.msg);
        break;
      case "info":
        toast.info(objMsg.msg);
        break;
      case "success":
        toast.success(objMsg.msg);
        break;
      case "warning":
        toast.warning(objMsg.msg);
        break;
    }
  });
};

export default treatmentResponse;
