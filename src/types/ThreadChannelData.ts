import { Snowflake, ThreadAutoArchiveDuration, ThreadChannelTypes } from "fosscord.js";
import { MessageData } from "./MessageData";

export interface ThreadChannelData {
    type: ThreadChannelTypes;
    name: string;
    archived: boolean;
    autoArchiveDuration: ThreadAutoArchiveDuration;
    locked: boolean;
    rateLimitPerUser: number;
    messages: MessageData[];
}
