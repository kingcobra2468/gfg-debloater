"use trict"

// identifier for main article
const CONTENT_IDENTIFIERS = [
    '#home-page > .article-page_flex > .leftBar',
    '#main > #primary'
]

// identifier for the side panel
const SIDEBAR_IDENTIFIERS = [
    '#home-page > .article-page_flex > .rightBar',
    '#main > #secondary'
]
const BANNER_CSS_IDENTIFIER = 'eventBannerCSS' // identifier for the event banner

// Tries all identifiers, until one works. Removes the first occurance 
// of an identifier that works.
const on_first_occurance = function (query_identifiers, on_found) {
    let occurance_found = false

    for (let identifier of query_identifiers) {
        console.log(identifier)
        let occurance = document.querySelector(identifier)
        if (!occurance)
            continue

        on_found(occurance)
        occurance_found = true
    }

    return occurance_found
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

    let sidebar_found = on_first_occurance(SIDEBAR_IDENTIFIERS,
        (occurance) => occurance.remove())
    if (!sidebar_found) // no sidebar was ever found
        return

    on_first_occurance(CONTENT_IDENTIFIERS, (occurance) => {
        occurance.style.maxWidth = '100%'
        occurance.style.flexBasis = '100%'
    })
}

debloat_content()
debloat_article_banners()