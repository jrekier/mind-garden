module.exports = function(eleventyConfig) {
    
    const markdownIt = require('markdown-it');
    const markdownItOptions = {
        html: true,
        linkify: true
    };
    
    const md = markdownIt(markdownItOptions)
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-attrs'))
    .use(function(md) {
        // Recognize Mediawiki links ([[text]])
        md.linkify.add("[[", {
            validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
            normalize: match => {
                const parts = match.raw.slice(2,-2).split("|");
                parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
                match.text = (parts[1] || parts[0]).trim();
                // match.url = `/mind-garden/notes/${parts[0].trim()}/`;                
                // match.url = `/mind-garden/notes/${parts[0].toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')}/`;
                match.url = `/mind-garden/notes/${parts[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
                .replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
                .replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
                .replace(/(^-+|-+$)/g, '') // Remove extra hyphens from beginning or end of the string
                .toLowerCase()
                .trim()}/`;
            }
        })
    })
    
    eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })

    eleventyConfig.setLibrary('md', md);
    
    eleventyConfig.addCollection("notes", function (collection) {
        return collection.getFilteredByGlob(["notes/**/*.md", "index.md"]);
        // return collection.getFilteredByGlob(["notes/**/*.md"]);
        // return collection.getFilteredByGlob(["/mind-garden/notes/**/*.md", "index.md"]);
    });
    
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.setUseGitIgnore(false);

    return {
        dir: {
            input: "./",
            output: "_site",
            layouts: "layouts",
            includes: "includes",
            data: "_data"
        },
        passthroughFileCopy: true,
        pathPrefix: "/mind-garden/"
    }
}
