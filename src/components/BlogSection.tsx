// Updated BlogSection.tsx - Link featured article to /article without ID
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Eye } from 'lucide-react';

const BlogSection = () => {
  const categories = [
    'All', '156', 'Medical Tourism', '42', 'Cardiology', '28', 
    'Dentistry', '35', 'Fertility', '22', 'Recovery', '19', 'Insurance', '10'
  ];

  const featuredArticle = {
    category: 'Featured Article',
    title: 'Complete Guide to Medical Tourism: What You Need to Know',
    description: 'Everything you need to know about getting medical treatment abroad, from choosing the right hospital to post-operative care and recovery.',
    author: 'Dr. Sarah Williams',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    icon: '📖',
  };

  const articles = [
    {
      category: 'Cardiology',
      views: '8.7K',
      title: 'Heart Surgery Abroad: Cost Comparison and Quality Insights',
      description: 'Detailed analysis of heart surgery costs and quality standards across top medical tourism destinations including India, Thailand, and Singapore.',
      author: 'Dr. Michael Chen',
      readTime: '6 min read',
      icon: '📄',
    },
    {
      category: 'Dentistry',
      views: '12.1K',
      title: 'Dental Tourism: Transform Your Smile While Saving Money',
      description: 'How to get world-class dental treatments at a fraction of home country costs. Compare destinations, procedures, and recovery timelines.',
      author: 'Dr. Amanda Rodriguez',
      readTime: '5 min read',
      icon: '📄',
    },
    {
      category: 'Fertility',
      views: '9.3K',
      title: 'IVF Success Stories: Hope Through Medical Tourism',
      description: 'Real stories of couples who achieved their dream of parenthood through fertility treatments abroad. Success rates, costs, and emotional support.',
      author: 'Dr. Lisa Thompson',
      readTime: '7 min read',
      icon: '📄',
    },
    {
      category: 'Recovery',
      views: '6.8K',
      title: 'Recovery and Aftercare: Your Medical Tourism Journey',
      description: 'Essential tips for post-operative care, follow-up appointments, and ensuring the best outcomes from your medical tourism experience.',
      author: 'Dr. James Wilson',
      readTime: '6 min read',
      icon: '📄',
    },
    {
      category: 'Insurance',
      views: '5.2K',
      title: 'Medical Tourism Insurance: Protecting Your Investment',
      description: 'Understanding medical tourism insurance options, what\'s covered, and how to choose the right policy for international medical treatments.',
      author: 'Sarah Johnson',
      readTime: '4 min read',
      icon: '📄',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Health & Medical Tourism Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest articles, guides, and expert insights on medical tourism, treatments, and healthcare destinations worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={index === 0 ? "default" : "secondary"}
              className={`cursor-pointer ${index === 0 ? 'bg-primary text-primary-foreground' : 'hover:bg-primary hover:text-primary-foreground'} transition-colors`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="mb-12 border-0 shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="text-4xl">{featuredArticle.icon}</div>
              <div className="flex-1">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  {featuredArticle.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredArticle.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">{featuredArticle.author}</span>
                    <span>{featuredArticle.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link to="/article">Read Full Article</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-2xl">{article.icon}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit mb-3">
                  {article.category}
                </Badge>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="font-medium">{article.author}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-lg mb-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Medical Tourism Insights</h3>
            <p className="mb-6 opacity-90">
              Get the latest health guides, treatment options, and medical tourism tips delivered directly to your inbox. Join 50,000+ subscribers.
            </p>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Subscribe Now
            </Button>
            <p className="text-xs opacity-75 mt-4">
              By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;