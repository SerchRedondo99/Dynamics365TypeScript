import { Utilidades } from "../../Utilidades/Utilidades";

export class Principal {

    static formContext: Xrm.FormContext;
    static IdRecord: string;
    static NameEntity: string;

    public static OnLoad(context: Xrm.Events.EventContext): void {
        try {
            this.formContext = context.getFormContext();
            this.IdRecord = this.formContext.data.entity.getId();
            this.NameEntity = this.formContext.data.entity.getEntityName();

            this.ObtenerRegistro(this.NameEntity, this.IdRecord).then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error);
            })

        } catch (error) {
            console.log(error);
        }
    }

    public static OnSave(): void {
        try {

        } catch (error) {
            console.log(error);
        }
    }

    public static async ObtenerRegistro(entityname: string, entityId: string): Promise<any> {
        try {
            if (this.formContext.ui.getFormType() == Utilidades.FormType.Update) {
                return await Xrm.WebApi.retrieveRecord(entityname, entityId);
            } else {
                return null;
            }
        } catch (error) {

        }
    }
}

