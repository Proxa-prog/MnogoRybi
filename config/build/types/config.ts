export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  public: string;
  images: string;
  src: string;
  global: string;
  root: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
