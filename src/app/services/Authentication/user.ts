export interface User {
    uid : string;
    email : string;
    // location: {
    //     lat: number;
    //     lon: number;
    //   };
    LastLoggedOn: string;
    displayName : string;
    photoURL: string;
    emailVerified: boolean;
}