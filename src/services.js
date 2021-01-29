import { allObservatories, observatoriesByName } from "./observatoryData";

function ObservatoriesService() {
  return {
    async fetchAll() {
      return Promise.resolve(allObservatories);
    },
    async fetchByName(id) {
      return Promise.resolve(observatoriesByName[id]);
    },
  };
}

export const observatoriesService = ObservatoriesService();
