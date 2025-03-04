import { Plugin } from "vite";

export default function singleHMR(): Plugin {
  return {
    name: "singleHMR",
    handleHotUpdate({ modules }) {
      modules.forEach((m) => {
        m.clientImportedModules = new Set();
        m.importers = new Set();
      });
      return modules;
    },
  };
}
