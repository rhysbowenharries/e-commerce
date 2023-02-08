// @ts-nocheck
// TODO: Figure out how to type this
// TODO: remove items with <s> tags
export const descriptionFormater = (description) => {
  const descriptionObj = JSON.parse(description);
  const mappedDesctiption = descriptionObj?.blocks?.map((data) => data.data);
  const extractedHTML = mappedDesctiption?.map((data) => data.text);
  const uniqHTML = [...new Set(extractedHTML)];
  return uniqHTML;
};

export const PRODUCT_LOGO = "images/logo.jpeg";
