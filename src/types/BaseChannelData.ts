import { TextBasedChannelTypes, VoiceBasedChannelTypes, ThreadChannelTypes } from 'fosscord-gopnik';
import { ChannelPermissionsData } from './';

export interface BaseChannelData {
    type: TextBasedChannelTypes | VoiceBasedChannelTypes | ThreadChannelTypes;
    name: string;
    parent?: string;
    permissions: ChannelPermissionsData[];
}
