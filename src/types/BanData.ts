import { Snowflake } from 'fosscord.js';

export interface BanData {
    id: Snowflake;
    reason: string;
}
