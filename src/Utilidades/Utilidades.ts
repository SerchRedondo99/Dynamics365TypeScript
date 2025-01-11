
export class Utilidades {

    public static _FORM_TYPE = {
        CREATE: 1,
        UPDATE: 2,
        READONLY: 3,
        DISABLED: 4,
        QUICKCREATE: 5,
        BULKEDIT: 6
    }

    public static pageType = {
        entitylist: "entitylist",
        entityrecord: "entityrecord",
        dashboard: "dashboard",
        webresource: "webresource",
        custom: "custom"
    }

    public static RequiredLevel = {
        none: "none",
        required: "required",
        recommended: "recommended"
    }

    public static FormType = {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 6
    };

    ///Option CRM
    public static SaveMode = {
        Save: 1,
        SaveandClose: 2,
        Deactivate: 5,
        Reactivate: 6,
        Send: 7,
        Disqualify: 15,
        Qualify: 16,
        Assign: 47,
        SaveasCompleted: 58,
        SaveandNew: 59,
        AutoSave: 70
    }
}
