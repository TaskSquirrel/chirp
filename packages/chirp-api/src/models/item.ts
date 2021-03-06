import { MongoDocument } from "./mongo";

export enum ContentType {
    RETWEET = "retweet",
    REPLY = "reply"
}

export interface ItemPayload {
    id: string;
    content: string;
    childType?: ContentType | null;
    parent?: string;
    media?: string[];
    timestamp: number;
    username: string;
    retweeted: number;
    property: {
        likes: number;
    };
}

export interface ItemModel extends MongoDocument, ItemCoreModel {
    media?: string[];
}

export interface ItemCoreModel {
    content: string;
    childType?: ContentType | null;
    parentID?: string;
    timestamp: number;
    ownerID: string;
    ownerName: string;
    retweeted: number;
    likes: number;
    media?: string[];
}

export interface LikesModel extends MongoDocument {
    ownerID: string;
    owner: string;
    itemID: string;
}

export interface MediaModel extends MongoDocument {
    owner: string;
    used: boolean;
}
