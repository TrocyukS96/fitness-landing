const isProduction = process.env.NEXT_PUBLIC_MODE === 'production';


module.exports = {
  siteUrl: isProduction ? 'https://polovtsev.by' : 'https://localhost:3000',
  generateRobotsTxt: isProduction, // automatically creates robots.txt file
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/dashboard/**',
  ],
  generateIndexSitemap: isProduction,
}