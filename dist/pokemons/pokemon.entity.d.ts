import { Admin } from "src/admins/admins.entity";
export declare class PokemonEntity {
    id: number;
    name: string;
    type: string;
    level: number;
    adminsId: number;
    admins: Admin;
}
