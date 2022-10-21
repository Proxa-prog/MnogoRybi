export interface IPaths {
    entry: string;
    output: string;
    isDev: boolean;
}

export interface IWebpackConfig {
    mode: string;
    paths: IPaths;
    isDev: boolean;
}