import { IMessage } from "@/model/User.model";

export interface IApiResponse {
    success: boolean;
    message: string;
    isAccepingMessages?: boolean;
    messages?: Array<IMessage>;
}