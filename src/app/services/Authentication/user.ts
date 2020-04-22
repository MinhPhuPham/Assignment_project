export interface User {
    uid : string;
    email : string;
    latitude: string;
    longitude: string;
    // LastLoggedOn: string;
    displayName : string;
    photoURL: string;
    emailVerified: boolean;
    // phone:number;
    // profession:string;
}
export interface User_Detail {
    uid : string;
    displayName : string;
    photoURL: string;
}
