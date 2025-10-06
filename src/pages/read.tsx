// Read.tsx - Component for reading a specific article (e.g., Heart Surgery Abroad)
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, BookOpen, Eye } from 'lucide-react';

const Read = () => {
  // Use the same placeholder image URL
  const placeholderImage = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';

  // Hardcoded article data for the Heart Surgery page
  const article = {
    category: 'Cardiology',
    title: 'Heart Surgery Abroad: Cost Comparison and Quality Insights',
    description: 'Detailed analysis of heart surgery costs and quality standards across top medical tourism destinations including India, Thailand, and Singapore.',
    fullContent: `
      <h2>Introduction to Heart Surgery Abroad</h2>
      <p>Heart surgery, from bypass procedures to valve replacements, can be prohibitively expensive in Western countries. Medical tourism offers a viable alternative, combining cost savings with high-quality care in destinations like India, Thailand, and Singapore. This article compares costs, quality metrics, and patient experiences.</p>

      <h2>Cost Comparison Across Destinations</h2>
      <ul>
        <li><strong>India:</strong> Coronary artery bypass grafting (CABG) costs $5,000–$10,000, compared to $70,000–$150,000 in the US. Valve replacement: $8,000–$15,000.</li>
        <li><strong>Thailand:</strong> Known for minimally invasive techniques, CABG: $12,000–$20,000. Excellent for international patients with English-speaking staff.</li>
        <li><strong>Singapore:</strong> Premium option with costs at $20,000–$35,000 for CABG, offering state-of-the-art facilities and short recovery times.</li>
      </ul>
      <p>These savings—up to 80%—include hospital stays, surgeon fees, and medications, but exclude travel.</p>

      <h2>Quality Standards and Accreditation</h2>
      <p>All three destinations feature JCI-accredited hospitals. India's Apollo Hospitals and Fortis are renowned for cardiac expertise. Thailand's Bumrungrad International Hospital reports success rates comparable to the US (95%+ for CABG). Singapore's Mount Elizabeth Hospital emphasizes precision robotics, with mortality rates under 2%.</p>

      <h2>Patient Considerations</h2>
      <h3>Choosing the Right Destination</h3>
      <p>Factor in visa ease, flight times, and post-op support. India suits budget-conscious patients; Thailand for a relaxed recovery; Singapore for complex cases.</p>

      <h3>Risks and Preparations</h3>
      <p>Ensure comprehensive insurance and pre-travel consultations. Success stories highlight seamless experiences, but always verify surgeon credentials.</p>

      <h2>Conclusion</h2>
      <p>Heart surgery abroad can be safe, affordable, and transformative. Consult accredited providers to tailor your journey.</p>
    `,
    author: 'Dr. Michael Chen',
    authorTitle: 'Cardiologist & Medical Tourism Specialist',
    date: 'Oct 06, 2025',
    readTime: '6 min read',
    views: '12.1K',
    image: placeholderImage, // Use placeholder image
    relatedArticles: [
      {
        title: 'Dental Tourism: Transform Your Smile While Saving Money',
        description: 'How to get world-class dental treatments at a fraction of home country costs. Compare destinations, procedures, and recovery timelines.',
        category: 'Dentistry',
        readTime: '5 min read',
      },
      {
        title: 'IVF Success Stories: Hope Through Medical Tourism',
        description: 'Real stories of couples who achieved their dream of parenthood through fertility treatments abroad. Success rates, costs, and emotional support.',
        category: 'Fertility',
        readTime: '7 min read',
      },
      {
        title: 'Recovery and Aftercare: Your Medical Tourism Journey',
        description: 'Essential tips for post-operative care, follow-up appointments, and ensuring the best outcomes from your medical tourism experience.',
        category: 'Recovery',
        readTime: '6 min read',
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
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge variant="secondary">{article.category}</Badge>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{article.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{article.description}</p>
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{article.author}</p>
                <p className="text-sm text-muted-foreground">{article.authorTitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{article.views} views</span>
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
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />

          {/* Related Articles */}
          {article.relatedArticles.length > 0 && (
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Related Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {article.relatedArticles.map((relArticle, index) => (
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
                        <Link to="/read">Read More</Link>
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

export default Read;