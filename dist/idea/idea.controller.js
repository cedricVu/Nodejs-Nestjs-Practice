"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const idea_service_1 = require("./idea.service");
const idea_dto_1 = require("./idea.dto");
const validation_pipe_1 = require("src/shared/validation.pipe");
let IdeaController = class IdeaController {
    constructor(ideaService) {
        this.ideaService = ideaService;
        this.logger = new common_1.Logger('IdeaController');
    }
    showAllIdeas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.ideaService.getAllIdeas();
            }
            catch (error) {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    createNewIdea(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.logger.log(JSON.stringify(data));
                return yield this.ideaService.createAnIdea(data);
            }
            catch (e) {
                throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    readAnIdea(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idea = yield this.ideaService.getOneIdea(id);
                if (!idea) {
                    throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
                }
                return idea;
            }
            catch (e) {
                throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    updateAnIdea(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idea = yield this.ideaService.updateAnIdea(id, data);
                if (!idea) {
                    throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
                }
                return idea;
            }
            catch (error) {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
    deleteAnIdea(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.ideaService.destroyAnIdea(id);
            }
            catch (error) {
                throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "showAllIdeas", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [idea_dto_1.IdeaDTO]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "createNewIdea", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "readAnIdea", null);
__decorate([
    common_1.Put(':id'),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "updateAnIdea", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IdeaController.prototype, "deleteAnIdea", null);
IdeaController = __decorate([
    common_1.Controller('api/idea'),
    __metadata("design:paramtypes", [idea_service_1.IdeaService])
], IdeaController);
exports.IdeaController = IdeaController;
//# sourceMappingURL=idea.controller.js.map