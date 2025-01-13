import { Utilidades } from "../../Utilidades/Utilidades";

export class Principal {

    static formContext: Xrm.FormContext;
    static IdRecord: string;
    static NameEntity: string;

    public static async OnLoad(context: Xrm.Events.EventContext): Promise<void> {
        try {

            this.inicializarContexto(context);

            if (Utilidades.FormType.Update === this.formContext.ui.getFormType()) {

                const record = await this.ObtenerRegistro(this.NameEntity, this.IdRecord);
                console.log("Registro Obtenido : ", record);
            }
        } catch (error) {
            console.log("Error OnLoad", error);
        }
    }

    public static OnSave(): void {
        try {
            console.log("Executando OnSave");
        } catch (error) {
            console.log(error);
        }
    }

    public static async ObtenerRegistro(entityname: string, entityId: string): Promise<unknown | null> {
        try {

            const record = await Xrm.WebApi.retrieveRecord(entityname, entityId);
            return record ?? null;

        } catch (error) {

            console.error("Error al obtener el registro", error);

            return null;
        }
    }
    private static inicializarContexto(context: Xrm.Events.EventContext) {
        this.formContext = context.getFormContext();
        this.IdRecord = this.formContext.data.entity.getId();
        this.NameEntity = this.formContext.data.entity.getEntityName();
    }
}