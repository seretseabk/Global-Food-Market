import { IAddress } from "./iaddress";
import { IMenuItem } from "./imenu-item";

export interface IMenu {
    id: number;
    name: string;
    description: string;
    filename: string;
    location: IAddress;
    menu: IMenuItem[];
}
