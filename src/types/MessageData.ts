import { MessageEmbed, FileOptions } from 'fosscord-gopnik';

export interface MessageData {
    username: string;
    avatar?: string;
    content?: string;
    embeds?: MessageEmbed[];
    files?: FileOptions[];
    pinned?: boolean;
}
