// identifier for main article
const CONTENT_IDENTIFIERS = [
  '#home-page > .article-page_flex > .leftBar',
  '#main > #primary',
];
// identifier for the side panel
const SIDEBAR_IDENTIFIERS = [
  '#home-page > .article-page_flex > .rightBar',
  '#main > #secondary',
];
const BANNER_CSS_IDENTIFIER = 'eventBannerCSS'; // identifier for the event banner
const SIGN_UP_POP_UP_IDENTIFIER = 'shell';
const CRED_POP_UP_IDENTIFIER = '#credential_picker_container';

// Tries all identifiers, until one works. Performs an onFound call
// on the element of an identifier that works.
const onFirstInstance = async (identifiers) => {
  const validIdentifier = identifiers.find((identifier) => document.querySelector(identifier));
  return document.querySelector(validIdentifier);
};

// Removes all elements for each of the input classes.
function removeAllClassElements(...classes) {
  classes.forEach((className) => {
    Object.values(document.getElementsByClassName(className))
      .forEach((instance) => instance.remove());
  });
}

// Removes the side panel from the article and sets the article
// to be maximum width.
const expandContent = () => {
  onFirstInstance(SIDEBAR_IDENTIFIERS)
    .then((instance) => {
      if (!instance) {
        throw new Error('No sidebar found');
      }

      instance.remove();
      return onFirstInstance(CONTENT_IDENTIFIERS);
    })
    .then((instance) => {
      if (!instance) {
        throw new Error('No sidebar found');
      }

      instance.style.maxWidth = '100%';
      instance.style.flexBasis = '100%';
    })
    .catch((_1) => { });
};

expandContent();
removeAllClassElements(BANNER_CSS_IDENTIFIER, SIGN_UP_POP_UP_IDENTIFIER, CRED_POP_UP_IDENTIFIER);
