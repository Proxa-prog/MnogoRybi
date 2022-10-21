export interface IPaths {
    entry: string[];
    output: {
        path: string;
        filename: string;
        clean: boolean;
    }
}

export interface IWebpackConfig {
    mode: string;
    entry: IPaths;
}