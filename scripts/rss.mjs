import { mkdirSync, writeFileSync } from 'fs'
import GithubSlugger from 'github-slugger'
import path from 'path'
import { sortPosts } from 'pliny/utils/contentlayer.js'
import { escape } from 'pliny/utils/htmlEscaper.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import siteMetadata from '../data/siteMetadata.js'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const tagData = require('../app/tag-data.json')

const generateRssItem = (config, post) => `
  <item>
    <guid>${config.siteUrl}/posts/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/posts/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (config, posts, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/blog</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post)).join('')}
    </channel>
  </rss>
`

async function generateRSS(config, allBlogs, page = 'feed.xml') {
  try {
    const publishPosts = allBlogs.filter((post) => post.draft !== true)
    // RSS for blog post
    if (publishPosts.length > 0) {
      const rss = generateRss(config, sortPosts(publishPosts))
      writeFileSync(`./public/${page}`, rss)
    }

    if (publishPosts.length > 0) {
      for (const tag of Object.keys(tagData)) {
        const filteredPosts = allBlogs.filter((post) =>
          post.tags.map((t) => GithubSlugger.slug(t)).includes(tag)
        )
        const rss = generateRss(config, filteredPosts, `tags/${tag}/${page}`)
        const rssPath = path.join('public', 'tags', tag)
        mkdirSync(rssPath, { recursive: true })
        writeFileSync(path.join(rssPath, page), rss)
      }
    }
  } catch (error) {
    console.error('❌ RSS generation failed:', error)
  }
}

const rss = () => {
  console.log('RSS feed start generated...')
  generateRSS(siteMetadata, allBlogs)
  console.log('RSS feed generated...')
}
export default rss
