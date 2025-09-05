/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://invitapy.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/como-funciona'),
    await config.transform(config, '/precios'),
    await config.transform(config, '/faq'),
    await config.transform(config, '/demo'),
    await config.transform(config, '/contacto'),
    await config.transform(config, '/terminos'),
    await config.transform(config, '/privacidad'),
    await config.transform(config, '/gracias'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://invitapy.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    const defaultTransform = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }

    // Páginas principales con mayor prioridad
    if (path === '/') {
      return {
        ...defaultTransform,
        priority: 1.0,
        changefreq: 'daily',
      }
    }

    if (path === '/precios' || path === '/demo') {
      return {
        ...defaultTransform,
        priority: 0.9,
        changefreq: 'weekly',
      }
    }

    if (path === '/faq' || path === '/como-funciona') {
      return {
        ...defaultTransform,
        priority: 0.8,
        changefreq: 'monthly',
      }
    }

    return defaultTransform
  },
}
