/**
 * Created by smtandabuzo on 2019/08/06.
 */
export class Transfer {
    nationalID: number;
    fileNumber: number;
    fromPrison: string;
    toPrison: string;
    dateOfTransfer: Date;
    public transfers: any = [];
}
