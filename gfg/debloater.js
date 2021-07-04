"use trict"

const CONTENT_IDENTIFIER = 'leftBar'  // identifier for main article
const SIDEBAR_IDENTIFIER = 'rightBar' // identifier for the side panel
const BANNER_CSS_IDENTIFIER = 'eventBannerCSS' // identifier for the event banner

// Removes first occurance of a class if present.
const remove_first_occurance = function (class_identifier) {
    let occurance = document.getElementsByClassName(class_identifier)

    if (!occurance || content.length == 0)
        return false
    occurance[0].remove()

    return true
}

// Removes all banners from the article.
const debloat_article_banners = function () {
    let imgs = document.getElementsByClassName(BANNER_CSS_IDENTIFIER)

    for (let banner of imgs)
        banner.remove()
}

// Removes the side panel from the article and sets the article
// to be maximum width.
const debloat_content = function () {
    if (!remove_first_occurance(SIDEBAR_IDENTIFIER))
        return

    let content = document.getElementsByClassName(CONTENT_IDENTIFIER)
    if (!content || !content.length)
        return

    content = content[0]
    content.style.maxWidth = '100%'
    content.style.flexBasis = '100%'
}

debloat_content()
debloat_article_banners()