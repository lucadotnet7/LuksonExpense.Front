export interface IModule {
    name: string;
    iconName: string;
    route: string;
}

export interface IModuleList {
    totalRegisters: number;
    modules: IModule[]
}