import { IAddress } from "./iaddress";
import { IMenuItem } from "./imenu-item";

export interface Iorder {
    
    id: number;
    menuName: string;
    location: IAddress;
    total: number;
    items: IMenuItem [];
    complete: boolean;
}
