import { TextBasedChannelTypes, VoiceBasedChannelTypes, ThreadChannelTypes } from 'fosscord.js';
import { ChannelPermissionsData } from './';

export interface BaseChannelData {
    type: TextBasedChannelTypes | VoiceBasedChannelTypes | ThreadChannelTypes;
    name: string;
    parent?: string;
    permissions: ChannelPermissionsData[];
}
