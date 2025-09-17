/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs');
const path = require('node:path');

const BASE_URL = 'https://vamsrealty.ru';

const TEAM_KEYS = {
  hakobyan: 'Hakobyan_Minas_Oganesovich',
  zakharova: 'Zakharova_Yana_Mikhailovna',
  platonova: 'Platonova_Mariya_Andreevna',
  bredyuk: 'Bredyuk_Kristina_Vladimirovna',
  nikulnikova: 'Nikulnikova_Mariya_Olegovna',
  zholobova: 'Zholobova_Elena_Vasilevna',
  varlakova: 'Varlakova_Valeria_Alexandrovna',
};

const exist_pages = ['/', '/personal-data-consent', '/privacy-policy', '/terms-of-use', '/team/[id]'];

function generateSitemap() {
  const urls = [];

  for (const page of exist_pages) {
    switch (page) {
      case '/':
        urls.push(`<url><loc>${BASE_URL}/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>`);
        break;
      case '/personal-data-consent':
      case '/privacy-policy':
      case '/terms-of-use':
        urls.push(`<url><loc>${BASE_URL}${page}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
        break;
      case '/team/[id]':
        Object.values(TEAM_KEYS).forEach(key => {
          urls.push(
            `<url><loc>${BASE_URL}/team/${key}</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`,
          );
        });
        break;
      default:
        break;
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;
}

const sitemap = generateSitemap();
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap, 'utf8');
console.log('✅ sitemap.xml создан!');
