// pages/Blog.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Header from '@/components/Header';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  alt: string;
  categories: string[];
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: '141361',
      title: 'Philosophy',
      slug: 'philosophy',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/philosophy-free-lifestyle-blog-website-template-353x277.jpg',
      alt: 'Philosophy',
      categories: ['Blog', 'Fashion', 'Personal Website Templates', 'Travel']
    },
    {
      id: '228545',
      title: 'Meranda',
      slug: 'meranda',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/meranda-free-template-353x278.jpg',
      alt: 'Meranda Free Template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '174198',
      title: 'Wordsmith',
      slug: 'wordsmith',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/wordsmith-free-template-353x278.jpg',
      alt: 'wordsmith free template',
      categories: ['Blog']
    },
    {
      id: '156974',
      title: 'World',
      slug: 'world',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/world-free-template-1-353x278.jpg',
      alt: 'Wordl Free Template',
      categories: ['Blog', 'Bootstrap Templates', 'Magazine & News']
    },
    {
      id: '134119',
      title: 'Suppablog',
      slug: 'suppablog',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/suppablog-free-creative-blog-template-for-writters-353x273.jpg',
      alt: 'Suppablog',
      categories: ['Blog', 'Creative', 'Personal Website Templates']
    },
    {
      id: '276541',
      title: 'Sunzine',
      slug: 'sunzine',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/sunzine-free-template-353x278.jpg',
      alt: 'Sunzine Free Template',
      categories: ['Blog', 'Gallery', 'Photography', 'Portfolio']
    },
    {
      id: '159284',
      title: 'Avision',
      slug: 'avision',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/avision-free-template-353x278.jpg',
      alt: 'Avision Free Template',
      categories: ['Blog', 'Bootstrap Templates', 'Magazine & News']
    },
    {
      id: '159322',
      title: 'WebMag',
      slug: 'webmag',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/webmag-free-template-353x278.jpg',
      alt: 'Webmag Free Template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '228516',
      title: 'Andrea',
      slug: 'andrea',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/andrea-free-template-353x278.jpg',
      alt: 'Andrea Free Template',
      categories: ['Blog', 'Bootstrap Templates', 'Fashion']
    },
    {
      id: '298155',
      title: 'Magdesign',
      slug: 'magdesign',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/magdesign-free-template-353x278.jpg',
      alt: 'Magdesign Free Template',
      categories: ['Blog', 'Bootstrap 5', 'Magazine & News']
    },
    {
      id: '177200',
      title: 'Libro',
      slug: 'libro',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/libro-free-template-353x278.jpg',
      alt: 'libro free template',
      categories: ['Blog']
    },
    {
      id: '300995',
      title: 'Axole',
      slug: 'axole',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/axole-website-template-353x286.jpg',
      alt: 'axole website template',
      categories: ['Blog', 'Bootstrap 5', 'Personal Website Templates']
    },
    {
      id: '160491',
      title: 'Magazine',
      slug: 'magazine',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/magazine-free-template-353x278.jpg',
      alt: 'Magazine Free Template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '207512',
      title: 'Revive',
      slug: 'revive',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/revive-free-template-1-353x278.jpg',
      alt: 'revive - simple blog template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '235932',
      title: 'Miniblog',
      slug: 'miniblog',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/miniblog-free-template-353x278.jpg',
      alt: 'Miniblog Free Template',
      categories: ['Blog', 'Bootstrap Templates', 'Business']
    },
    {
      id: '176219',
      title: 'Quitelight',
      slug: 'quitelight',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/quitelight-free-template-353x278.jpg',
      alt: 'quitelight',
      categories: ['Blog', 'Bootstrap Templates', 'Magazine & News']
    },
    {
      id: '162759',
      title: 'Callie',
      slug: 'callie',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/callie-free-template-353x278.jpg',
      alt: 'Callie Free Template',
      categories: ['Blog', 'Bootstrap Templates', 'Fashion']
    },
    {
      id: '137564',
      title: 'Juli',
      slug: 'juli',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/juli-free-lifestyle-blog-website-template-353x267.jpg',
      alt: 'Juli',
      categories: ['Blog', 'Personal Website Templates']
    },
    {
      id: '153672',
      title: 'Shout',
      slug: 'shout',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/shout-free-template-353x278.jpg',
      alt: 'Shout free template',
      categories: ['Blog', 'Fashion']
    },
    {
      id: '149981',
      title: 'Blanca',
      slug: 'blanca',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/blanca-free-template-353x278.jpg',
      alt: 'Blanca free template',
      categories: ['Blog', 'Portfolio']
    },
    {
      id: '253997',
      title: 'Readit Blog',
      slug: 'readit',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/readit-free-template-353x278.jpg',
      alt: 'Readit Free Template',
      categories: ['Blog']
    },
    {
      id: '303233',
      title: 'Moose',
      slug: 'moose',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/moose-colorlib-template-353x278.jpg',
      alt: 'Moose Colorlib Template',
      categories: ['Blog']
    },
    {
      id: '188092',
      title: 'Explore',
      slug: 'explore',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/explore-free-template-353x278.jpg',
      alt: 'explore free template',
      categories: ['Blog', 'Bootstrap Templates', 'Personal Website Templates']
    },
    {
      id: '138617',
      title: 'Droppler',
      slug: 'droppler',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/droppler-photography-blog-website-template-353x277.jpg',
      alt: 'Creative Agency Free Website Template',
      categories: ['Blog', 'Photography']
    },
    {
      id: '192419',
      title: 'VideoMag',
      slug: 'videomag',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/videomag-free-template-353x278.jpg',
      alt: 'videomag free template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '194983',
      title: 'Wordify',
      slug: 'wordify',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/wordify-free-template-353x278.jpg',
      alt: 'wordify free template',
      categories: ['Blog']
    },
    {
      id: '289359',
      title: 'Content',
      slug: 'content',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/content-free-template-353x278.jpg',
      alt: 'Content Free Template',
      categories: ['Blog']
    },
    {
      id: '205915',
      title: 'Endgame',
      slug: 'endgam',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/endgam-free-template-353x278.jpg',
      alt: 'endgam free template',
      categories: ['Blog', 'Gaming']
    },
    {
      id: '169524',
      title: 'Fantom',
      slug: 'fantom',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/fantom-free-template-353x278.jpg',
      alt: 'fantom free template',
      categories: ['Blog', 'Fashion']
    },
    {
      id: '250286',
      title: 'Blog WordPress Themes',
      slug: 'blog-wordpress-themes',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/blog-templates-353x266.jpg',
      alt: 'Blog WordPress Themes',
      categories: ['Blog', 'Bootstrap Templates', 'Fashion', 'Food / Drinks', 'Photography']
    },
    {
      id: '254754',
      title: 'Personal WordPress Themes',
      slug: 'personal-wordpress-themes',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/personal-website-templates-353x276.jpg',
      alt: 'Personal WordPress Themes',
      categories: ['Blog', 'Creative', 'Personal Website Templates', 'Portfolio', 'SEO']
    },
    {
      id: '273023',
      title: 'FoodeiBlog',
      slug: 'foodeiblog',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/foodeiblog-free-template-353x278.jpg',
      alt: 'FoodeiBlog Free Template',
      categories: ['Blog', 'Food / Drinks']
    },
    {
      id: '156967',
      title: 'Stuff',
      slug: 'stuff',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/stuff-free-template-353x278.jpg',
      alt: 'Stuff Free Template',
      categories: ['Blog', 'Bootstrap Templates', 'Magazine & News']
    },
    {
      id: '248856',
      title: 'Yummy',
      slug: 'yummy-2',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/yummy-free-template-353x278.jpg',
      alt: 'Yummy Free Template',
      categories: ['Blog', 'Business', 'Food / Drinks']
    },
    {
      id: '242322',
      title: 'Ionize',
      slug: 'ionize',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/ionize-free-template-353x278.jpg',
      alt: 'Ionize Free Template',
      categories: ['Blog', 'Fashion']
    },
    {
      id: '237877',
      title: 'Lifeleck',
      slug: 'lifeleck',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/lifeleck-free-template-353x278.jpg',
      alt: 'Lifeleck Free Template',
      categories: ['Blog', 'Bootstrap Templates']
    },
    {
      id: '219565',
      title: 'Daren',
      slug: 'daren',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/daren-free-template-353x278.jpg',
      alt: 'daren free template',
      categories: ['Blog', 'Bootstrap Templates']
    },
    {
      id: '215430',
      title: 'Eden',
      slug: 'eden',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/eden-free-template-353x278.jpg',
      alt: 'eden free template',
      categories: ['Blog', 'Bootstrap Templates', 'Magazine & News']
    },
    {
      id: '211195',
      title: 'Stories',
      slug: 'stories',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/stories-free-template-353x278.jpg',
      alt: 'stories free template',
      categories: ['Blog', 'Bootstrap Templates']
    },
    {
      id: '207524',
      title: 'Sensive',
      slug: 'sensive',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/sensive-free-template-353x278.jpg',
      alt: 'sensive free template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '207508',
      title: 'Hikers',
      slug: 'hikers',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/hikers-free-template-353x278.jpg',
      alt: 'hikers free template',
      categories: ['Blog']
    },
    {
      id: '199824',
      title: 'Bounty',
      slug: 'bounty',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/bounty-free-template-353x278.jpg',
      alt: 'bounty free template',
      categories: ['Blog']
    },
    {
      id: '196490',
      title: 'Vizew',
      slug: 'vizew',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/vizew-free-template-353x278.jpg',
      alt: 'vizew free template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '194979',
      title: 'Ruft',
      slug: 'ruft',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/ruft-free-template-353x278.jpg',
      alt: 'ruft free template',
      categories: ['Blog', 'Bootstrap Templates', 'Travel']
    },
    {
      id: '191644',
      title: 'Fantasy',
      slug: 'fantasy',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/fantasy-free-template-353x278.jpg',
      alt: 'fantasy free template',
      categories: ['Blog', 'Travel']
    },
    {
      id: '187685',
      title: 'Bueno',
      slug: 'bueno',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/bueno-free-template-353x278.jpg',
      alt: 'bueno free template',
      categories: ['Blog', 'Startup']
    },
    {
      id: '186070',
      title: 'NewsFlex',
      slug: 'newsflex',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/newsbox-free-template-353x278.jpg',
      alt: 'newsbox free template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '181621',
      title: 'Opium',
      slug: 'opium',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/opium-free-template-353x278.jpg',
      alt: 'opium free template',
      categories: ['Blog', 'Fashion', 'Personal Website Templates']
    },
    {
      id: '179043',
      title: 'Foode',
      slug: 'foode',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/foode-free-template-353x278.jpg',
      alt: 'foode free template',
      categories: ['Blog']
    },
    {
      id: '178032',
      title: 'Foodblog',
      slug: 'foodblog',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/foodblog-free-template-353x278.jpg',
      alt: 'foodblog free template',
      categories: ['Blog']
    },
    {
      id: '168296',
      title: 'Ednews',
      slug: 'ednews',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/ednews-free-template-353x278.jpg',
      alt: 'ednews free template',
      categories: ['Blog', 'Bootstrap Templates']
    },
    {
      id: '166277',
      title: 'Newsbit',
      slug: 'newsbit',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/newsbit-free-template-353x278.jpg',
      alt: 'newsbit free template',
      categories: ['Blog', 'Magazine & News']
    },
    {
      id: '159294',
      title: 'Balita',
      slug: 'balita',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/balita-free-template-353x278.jpg',
      alt: 'Balita Free Template',
      categories: ['Blog']
    },
    {
      id: '157768',
      title: 'Original',
      slug: 'original',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/original-free-template-353x278.jpg',
      alt: 'Original Free Template',
      categories: ['Blog']
    },
    {
      id: '153945',
      title: 'Sasha',
      slug: 'sasha',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/sasha-free-template-353x278.jpg',
      alt: 'Sasha free template',
      categories: ['Blog']
    },
    {
      id: '149977',
      title: 'Article',
      slug: 'article',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/article-free-template-353x278.jpg',
      alt: 'Article free template',
      categories: ['Blog']
    },
    {
      id: '148575',
      title: 'Blogger',
      slug: 'blogger',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/blogger-free-blogging-website-template-353x275.jpg',
      alt: 'Blogger free blog website template',
      categories: ['Blog']
    },
    {
      id: '133384',
      title: 'Bona',
      slug: 'bona',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/bona-food-blog-website-template-353x291.jpg',
      alt: 'Bona',
      categories: ['Blog', 'Creative']
    },
    {
      id: '134132',
      title: 'Yummy',
      slug: 'yummy',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/yummy-minimal-food-blog-website-template-353x291.jpg',
      alt: 'Yummy',
      categories: ['Blog', 'Creative', 'Photography']
    },
    {
      id: '134089',
      title: 'Katt',
      slug: 'katt',
      image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/katt-free-creative-blog-website-template-353x292.jpg',
      alt: 'Katt',
      categories: ['Blog', 'Creative', 'Portfolio']
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-primary mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Bootstrap’s list of the best blog website templates makes them fully responsive and mobile-friendly. What’s more, they are all compatible with modern web browsers and quick to edit. You can use these superb blog templates for lifestyle, food, personal, fashion, finance, travel, technology, or other blogging projects. Due to the fact of how heavy they are loaded with outstanding features, all our templates for bloggers do not give a feel they are free at all. The designs we have in store for you are neat and trendy, with great customizing functions. Change the color to fit your branding, edit the elements and fill the spaces with your content. With the right blend of everything and a strong emphasis on providing quality content, you march toward success with a firm step.
            </p>
            <p className="text-lg font-semibold mb-4">
              <span className="text-primary text-2xl">Looking for </span>
              <a href="#" className="text-primary underline">blog WordPress themes</a>?
            </p>
            <h2 className="text-xl font-semibold mb-4">List of the best blog website templates</h2>
          </header>

          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 pointer-events-none" />
              <Input
                type="search"
                placeholder="Search blog templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-card rounded-lg shadow-md border overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold mb-2">
                    <a href={`/blog/${post.slug}`} className="text-primary hover:underline">
                      {post.title}
                    </a>
                  </h3>
                  <div className="text-sm text-muted-foreground mb-2">
                    {post.categories.map((cat, index) => (
                      <span key={index}>
                        <a href="#" className="hover:underline">{cat}</a>
                        {index < post.categories.length - 1 && ' · '}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;