import observatoryData from "./observatoryData";

const observatories = Object.entries(observatoryData);

export const fetchById = (id) => {
  const result = observatories.filter((current) => current[1].id === id);
  return result[0][1];
};

export const fetchSequenceById = (id) => {
  const sequence = fetchById(id).sequence;
  const result = Object.entries(sequence);
  return result;
};
