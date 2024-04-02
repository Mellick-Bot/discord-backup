import { MessageEmbed, FileOptions } from 'fosscord.js';

export interface MessageData {
    username: string;
    avatar?: string;
    content?: string;
    embeds?: MessageEmbed[];
    files?: FileOptions[];
    pinned?: boolean;
    sentAt: string;
}
