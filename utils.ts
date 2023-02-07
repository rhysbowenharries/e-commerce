// @ts-nocheck
export const descriptionFormater = (description) => {
  const descriptionObj = JSON.parse(description);
  const mappedDesctiption = descriptionObj.blocks?.map((data) => data.data);
  const extractedHTML = mappedDesctiption.map((data) => data.text);
  return extractedHTML;
};
