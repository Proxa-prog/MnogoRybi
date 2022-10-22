interface IOutput {
  path: string;
  filename: string;
  clean: boolean;
}

export interface IDev {
  entry: string[];
  output: IOutput;
  devServer: {
    port: number;
  };
}

export interface IProd {
  entry: string[];
  output: IOutput;
}

export interface IWebpackConfig {
  mode: string;
  config: IDev | IProd;
}
