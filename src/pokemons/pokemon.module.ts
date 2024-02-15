import { HttpModule, Module } from "@nestjs/common";
import { PokemonController } from "./pokemon.controller";
import { PokemonService } from "./pokemon.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PokemonEntity } from "./pokemon.entity";
import { JwtModule } from "@nestjs/jwt";
import { CommonModule } from "src/common/common.module";
import { JWT_MODULE_OPTIONS } from "src/constants";

@Module({
    controllers: [PokemonController],
  providers: [
    PokemonService,
  ],
  imports: [
    TypeOrmModule.forFeature([PokemonEntity]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    PokemonService,
  ],
})

export class PokemonModule{}