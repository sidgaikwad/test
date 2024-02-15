"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_config_1 = require("nestjs-config");
const path = require("path");
const admins_roles_module_1 = require("./admins-roles/admins-roles.module");
const admins_module_1 = require("./admins/admins.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const banners_module_1 = require("./banners/banners.module");
const categories_module_1 = require("./categories/categories.module");
const common_module_1 = require("./common/common.module");
const common_service_1 = require("./common/common.service");
const constants_1 = require("./constants");
const all_exceptions_filter_1 = require("./filters/all-exceptions-filter");
const forgot_module_1 = require("./forgot/forgot.module");
const roles_guard_1 = require("./guards/roles.guard");
const settings_module_1 = require("./settings/settings.module");
const schedule_1 = require("@nestjs/schedule");
const units_module_1 = require("./units/units.module");
const contractormodule_1 = require("./contractor/contractormodule");
const gst_module_1 = require("./gst/gst.module");
const tendor_module_1 = require("./tendor/tendor.module");
const document_module_1 = require("./document/document.module");
const department_master_module_1 = require("./department-master/department-master.module");
const document_type_master_module_1 = require("./document-type-master/document-type-master.module");
const trasaction_module_1 = require("./transaction/trasaction.module");
const bankgurantee_module_1 = require("./bankgurantee/bankgurantee.module");
const sales_module_1 = require("./sales/sales.module");
const reciept_module_1 = require("./reciept/reciept.module");
const contractor_gst_module_1 = require("./contractor-gst/contractor-gst.module");
const contractor_sale_module_1 = require("./contractor-sale/contractor-sale.module");
const contractor_gst_purchase_module_1 = require("./contractor-sale-purchase/contractor-gst-purchase.module");
const bank_statement_module_1 = require("./bank-statement/bank-statement.module");
const payment_certificate_master_module_1 = require("./payment-certificate-master/payment-certificate-master.module");
const payment_certificate_module_1 = require("./payment-certificate/payment-certificate.module");
const pokemon_module_1 = require("./pokemons/pokemon.module");
const ENV = process.env.NODE_ENV;
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_config_1.ConfigModule,
            schedule_1.ScheduleModule.forRoot(),
            nestjs_config_1.ConfigModule.load(path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}'), {
                path: path.resolve(process.cwd(), 'env', !ENV ? '.env' : `.env.${ENV}`),
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    auth: {
                        user: 'no-reply@algoocean.com',
                        pass: 'yeeufyacrplteobf'
                    }
                },
                defaults: {
                    forceEmbeddedImages: true,
                    from: '"Algoocean" <no-reply@algoocean.com>',
                },
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (config) => config.get('database'),
                inject: [nestjs_config_1.ConfigService],
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            platform_express_1.MulterModule,
            common_module_1.CommonModule,
            admins_module_1.AdminsModule,
            admins_roles_module_1.AdminsRolesModule,
            banners_module_1.BannersModule,
            department_master_module_1.DepartmentMastersModule,
            categories_module_1.CategoriesModule,
            forgot_module_1.ForgotModule,
            settings_module_1.SettingsModule,
            units_module_1.UnitsModule,
            contractormodule_1.ContractorModule,
            tendor_module_1.TendorsModule,
            gst_module_1.GSTsModule,
            document_module_1.DocumentsModule,
            document_type_master_module_1.DocumentMastersModule,
            trasaction_module_1.TransactionModule,
            bankgurantee_module_1.BankGuranteesModule,
            sales_module_1.SalesModule,
            reciept_module_1.RecieptModule,
            contractor_gst_module_1.ContractorGstsModule,
            contractor_sale_module_1.ContractorSalesModule,
            contractor_gst_purchase_module_1.ContractorGstPurchasesModule,
            bank_statement_module_1.BankStatementsModule,
            payment_certificate_master_module_1.PaymentCertificateMastersModule,
            payment_certificate_module_1.PaymentCertificatesModule, pokemon_module_1.PokemonModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: all_exceptions_filter_1.AllExceptionsFilter,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
            common_service_1.CommonService,
        ],
        exports: [
            common_service_1.CommonService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map