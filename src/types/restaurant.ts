

export interface Restaurant {
    id: null|number;
    storeName: string;
    address: string;
    address2: null |string;
    menu: null |string;
    introduction:null | string;
    lar: number;
    lng: number;
    recommend: number;
    userId: null | string;
    sido:string;
    sigungu:string;
    ranking: null | number;
}

export interface MapList { 
    title : string;
    id :  number;
    latlng : Lating;
}

export interface Lating {
    lat : number;
    lng : number;
}