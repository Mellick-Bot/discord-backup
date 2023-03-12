import { MessageMentionOptions } from 'fosscord.js';

export interface LoadOptions {
    clearGuildBeforeRestore: boolean;
    maxMessagesPerChannel?: number;
    allowedMentions?: MessageMentionOptions;
}
