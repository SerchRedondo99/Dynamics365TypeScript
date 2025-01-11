import { Utilidades } from "../../Utilidades/Utilidades";

export class Principal {

    static formContext: Xrm.FormContext;

    public static OnLoad(context: Xrm.Events.EventContext) {
        try {
            this.formContext = context.getFormContext();
            console.log(this.formContext);
            console.log(Utilidades.FormType);
        } catch (error) {
            console.log(error);
        }
    }
}

