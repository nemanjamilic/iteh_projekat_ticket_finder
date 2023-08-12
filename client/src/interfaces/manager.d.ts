import { BaseKey } from '@pankod/refine-core';

//ManagerCardProp definiše koncerte koji su dostupni u komponenti ManagerCard. 
//Ova komponenta se koristi za prikaz informacija o jednom menadzeru.
export interface ManagerCardProp {
    id?: BaseKey | undefined,
    name: string,
    email: string,
    avatar: string,
    noOfConcerts: number
}

//InfoBarProps definiše koncerte za komponentu InfoBar. 
//Ova komponenta se koristi za prikazivanje informacija o kompaniji ili o nekom koncertu
export interface InfoBarProps {
    icon: ReactNode,
    name: string
}
