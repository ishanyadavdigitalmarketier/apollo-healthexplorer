// Article.tsx - Updated with placeholder image
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, BookOpen, Eye } from 'lucide-react';

const Article = () => {
  // Use a placeholder image URL instead of local file
  const placeholderImage = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';

  // Hardcoded featured article data for the full page
  const featuredArticle = {
    category: 'Featured Article',
    title: 'Complete Guide to Medical Tourism: What You Need to Know',
    description: 'Everything you need to know about getting medical treatment abroad, from choosing the right hospital to post-operative care and recovery.',
    fullContent: `
      <h2>Introduction to Medical Tourism</h2>
      <p>Medical tourism, the practice of traveling abroad for medical treatment, has grown exponentially in recent years. With healthcare costs soaring in many developed countries, patients are increasingly looking to destinations like India, Thailand, and Mexico for high-quality care at a fraction of the price. This guide will walk you through every aspect of your medical tourism journey.</p>

      <h2>Why Choose Medical Tourism?</h2>
      <ul>
        <li><strong>Cost Savings:</strong> Procedures can cost 50-80% less than in the US or Europe.</li>
        <li><strong>Quality Care:</strong> Many hospitals are JCI-accredited and staffed by internationally trained doctors.</li>
        <li><strong>Shorter Wait Times:</strong> No long queues for elective surgeries.</li>
        <li><strong>Holistic Experience:</strong> Combine treatment with vacation in beautiful destinations.</li>
      </ul>

      <h2>Top Destinations for Medical Tourism</h2>
      <p>India leads with advanced cardiac and orthopedic surgeries. Thailand excels in cosmetic and dental procedures. Singapore offers premium care for complex cases, while Turkey is popular for hair transplants and eye surgeries.</p>

      <h2>Step-by-Step Guide</h2>
      <h3>Step 1: Research and Planning</h3>
      <p>Identify your treatment needs and research accredited facilities. Consult with medical tourism facilitators for personalized quotes.</p>

      <h3>Step 2: Visa and Travel Arrangements</h3>
      <p>Most medical visas are straightforward. Plan for extra days for recovery and sightseeing.</p>

      <h3>Step 3: Pre-Treatment Preparations</h3>
      <p>Get necessary medical records translated and ensure travel insurance covers international treatment.</p>

      <h2>The Procedure and Hospital Stay</h2>
      <p>Expect English-speaking staff and luxury amenities in many facilities. Post-op care is comprehensive, often including physiotherapy and nutrition plans.</p>

      <h2>Recovery and Follow-Up</h2>
      <p>Follow your doctor's aftercare instructions diligently. Virtual follow-ups are common, and many packages include airport transfers and hotel stays.</p>

      <h2>Potential Risks and How to Mitigate Them</h2>
      <p>While rare, risks include travel complications and language barriers. Choose reputable agencies and comprehensive insurance to stay safe.</p>

      <h2>Conclusion</h2>
      <p>Medical tourism can be life-changing. With proper planning, you can access world-class care affordably. Ready to start your journey? Contact us for a free consultation.</p>
    `,
    author: 'Dr. Sarah Williams',
    authorTitle: 'Cardiologist & Medical Tourism Expert',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    views: '15.2K',
    image: placeholderImage, // Use placeholder image
    relatedArticles: [
      {
        title: 'Heart Surgery Abroad: Cost Comparison and Quality Insights',
        description: 'Detailed analysis of heart surgery costs and quality standards across top medical tourism destinations.',
        category: 'Cardiology',
        readTime: '6 min read',
      },
      {
        title: 'Dental Tourism: Transform Your Smile While Saving Money',
        description: 'How to get world-class dental treatments at a fraction of home country costs.',
        category: 'Dentistry',
        readTime: '5 min read',
      },
      {
        title: 'IVF Success Stories: Hope Through Medical Tourism',
        description: 'Real stories of couples who achieved their dream of parenthood through fertility treatments abroad.',
        category: 'Fertility',
        readTime: '7 min read',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Back Button */}
        <Button asChild variant="ghost" className="mb-8 flex items-center gap-2">
          <Link to="/blog">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </Button>

        {/* Article Hero */}
        <article className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge variant="secondary">{featuredArticle.category}</Badge>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{featuredArticle.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{featuredArticle.description}</p>
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{featuredArticle.author}</p>
                <p className="text-sm text-muted-foreground">{featuredArticle.authorTitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{featuredArticle.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{featuredArticle.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{featuredArticle.views} views</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>

          {/* Full Content */}
          <div 
            className="prose prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: featuredArticle.fullContent }}
          />

          {/* Related Articles */}
          {featuredArticle.relatedArticles.length > 0 && (
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Related Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredArticle.relatedArticles.map((relArticle, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted transition-colors">
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">{relArticle.category}</Badge>
                        <h4 className="font-semibold mb-1">{relArticle.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{relArticle.description}</p>
                        <div className="text-xs text-muted-foreground">
                          {relArticle.readTime}
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/article">Read More</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </article>

        {/* Newsletter Signup */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Loved This Article?</h3>
            <p className="mb-6 opacity-90">
              Subscribe for more insights on medical tourism and health tips.
            </p>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Subscribe Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Article;