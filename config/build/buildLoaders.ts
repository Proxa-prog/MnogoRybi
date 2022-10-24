export const selectConfig = (mode: string) => {
  if (mode && mode === "development") {
    return {
      devServer: {
        port: 2525,
      },
    };
  }

  return {};
};
