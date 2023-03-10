import { Snowflake } from 'fosscord-gopnik';

export interface BanData {
    id: Snowflake;
    reason: string;
}
