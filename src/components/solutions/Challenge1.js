/**
 * Code your solution here
 */
import * as React from "react";

export class NewsItem {
    constructor(node){
        this.headline = node.headline
        this.imageUrl = node.imageUrl
        this.date = node.date
        this.attachmentUrl = node.attachmentUrl
        this.newsId = node.newsId
        this.text = node.text
        this.outletName = node.outletName
        this.contactName = node.contactName
        /**
         * Write a class that will represent a news item
         * based on data sourced from the API feed
         * found in pages/challenge1.js
         *
         * The properties of the class should be such that the destructered
         * expression below would save the expected data:
         * const { headline, imageUrl, date, attachmentUrl, newsId, text, outletName, contactName } = newsItem
         */
    }
}
