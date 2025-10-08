// Read.tsx - Updated to be dynamic based on article ID with category-specific images
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, BookOpen, Eye, Phone, Mail } from 'lucide-react';

interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  fullContent: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  views: string;
  image: string;
  relatedArticles: {
    title: string;
    description: string;
    category: string;
    readTime: string;
  }[];
}

const mockArticles: Article[] = [
  {
    id: '1',
    category: 'Cardiology',
    title: 'Heart Surgery Abroad: Cost Comparison and Quality Insights',
    description: 'Detailed analysis of heart surgery costs and quality standards across top medical tourism destinations including India, Thailand, and Singapore.',
    fullContent: `
      <h2>Introduction to Heart Surgery Abroad</h2>
      <p>Heart surgery, from bypass procedures to valve replacements, can be prohibitively expensive in Western countries. Medical tourism offers a viable alternative, combining cost savings with high-quality care in destinations like India, Thailand, and Singapore. This article compares costs, quality metrics, and patient experiences.</p>

      <h2>Cost Comparison Across Destinations</h2>
      <ul>
        <li><strong>India:</strong> Coronary artery bypass grafting (CABG) costs $2,000–$5,000, compared to $50,000–$150,000 in the US. Valve replacement: $8,000–$15,000.</li>
        <li><strong>Thailand:</strong> Known for minimally invasive techniques, CABG: $12,000–$20,000. Excellent for international patients with English-speaking staff.</li>
        <li><strong>Singapore:</strong> Premium option with costs at $15,000–$30,000 for CABG, offering state-of-the-art facilities and short recovery times.</li>
      </ul>
      <p>These savings—up to 80%—include hospital stays, surgeon fees, and medications, but exclude travel.</p>

      <h2>Quality Standards and Accreditation</h2>
      <p>All three destinations feature JCI-accredited hospitals. India's Apollo Hospitals and Fortis are renowned for cardiac expertise, with success rates around 98% for CABG. Thailand's Bumrungrad International Hospital reports success rates comparable to the US (95%+ for CABG). Singapore's Mount Elizabeth Hospital emphasizes precision robotics, with mortality rates under 2%.</p>

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
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
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
      {
        title: 'Medical Tourism Insurance: Protecting Your Investment',
        description: 'Understanding medical tourism insurance options, what\'s covered, and how to choose the right policy for international medical treatments.',
        category: 'Insurance',
        readTime: '4 min read',
      },
    ],
  },
  {
    id: '2',
    category: 'Dentistry',
    title: 'Dental Tourism: Transform Your Smile While Saving Money',
    description: 'How to get world-class dental treatments at a fraction of home country costs. Compare destinations, procedures, and recovery timelines.',
    fullContent: `
      <h2>Introduction to Dental Tourism</h2>
      <p>Dental tourism has exploded in popularity, allowing patients to receive high-quality dental care at significantly reduced costs abroad. Countries like Mexico, Thailand, and Hungary offer procedures from implants to veneers at 50-80% less than in the US or Europe.</p>

      <h2>Top Destinations for Dental Work</h2>
      <ul>
        <li><strong>Mexico:</strong> Tijuana and Los Algodones specialize in implants ($800–$1,200 vs. $3,000+ in the US). Quick border access for North Americans.</li>
        <li><strong>Thailand:</strong> Bangkok clinics provide cosmetic dentistry like veneers ($200–$400 per tooth). Renowned for hygiene and English-speaking dentists.</li>
        <li><strong>Hungary:</strong> Budapest is Europe's dental capital, with full smile makeovers at €3,000–€6,000, compared to €15,000+ elsewhere.</li>
      </ul>
      <p>Savings include materials, labor, and overhead, with many clinics offering packages with hotel stays.</p>

      <h2>Popular Procedures and Costs</h2>
      <p>Implants, crowns, whitening, and orthodontics are common. Expect 1-2 week trips for most treatments, with immediate results for cosmetics.</p>

      <h2>Quality and Safety Tips</h2>
      <p>Choose ISO or ADA-accredited clinics. Patient reviews emphasize sterile environments and skilled prosthodontists. Follow-up care can be arranged remotely.</p>

      <h2>Conclusion</h2>
      <p>Dental tourism combines vacation with transformation. Research thoroughly and consult multiple providers for your perfect smile.</p>
    `,
    author: 'Dr. Amanda Rodriguez',
    authorTitle: 'Dentist & International Health Consultant',
    date: 'Sep 28, 2025',
    readTime: '5 min read',
    views: '15.4K',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    relatedArticles: [
      {
        title: 'Heart Surgery Abroad: Cost Comparison and Quality Insights',
        description: 'Detailed analysis of heart surgery costs and quality standards across top medical tourism destinations including India, Thailand, and Singapore.',
        category: 'Cardiology',
        readTime: '6 min read',
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
      {
        title: 'Medical Tourism Insurance: Protecting Your Investment',
        description: 'Understanding medical tourism insurance options, what\'s covered, and how to choose the right policy for international medical treatments.',
        category: 'Insurance',
        readTime: '4 min read',
      },
    ],
  },
  {
    id: '3',
    category: 'Fertility',
    title: 'IVF Success Stories: Hope Through Medical Tourism',
    description: 'Real stories of couples who achieved their dream of parenthood through fertility treatments abroad. Success rates, costs, and emotional support.',
    fullContent: `
      <h2>Introduction to IVF Medical Tourism</h2>
      <p>In vitro fertilization (IVF) can cost $12,000–$20,000 per cycle in the US, but abroad, it's as low as $3,000–$6,000 with comparable success rates. Destinations like Czech Republic, Spain, and Mexico share inspiring journeys.</p>

      <h2>Success Stories from Around the World</h2>
      <ul>
        <li><strong>Czech Republic:</strong> Prague clinics boast 50%+ success rates for under-35s at €2,500 per cycle. Emma and Tom from the UK welcomed twins after two cycles.</li>
        <li><strong>Spain:</strong> Barcelona's advanced labs offer egg donation for €5,000–€7,000. Sarah's story: Third-time success after home failures, now a proud mom.</li>
        <li><strong>Mexico:</strong> Affordable at $4,000, with 40-45% rates. The Garcias traveled from California for their miracle baby, praising compassionate care.</li>
      </ul>

      <h2>Factors Behind High Success Rates</h2>
      <p>European clinics use cutting-edge tech like PGS screening. Costs cover medications and monitoring, with success boosted by relaxed regulations in some areas.</p>

      <h2>Emotional and Practical Support</h2>
      <p>Many programs include counseling and donor matching. Patients report holistic care, turning stressful journeys into hopeful adventures.</p>

      <h2>Conclusion</h2>
      <p>IVF abroad offers hope and affordability. Connect with communities for guidance on your path to parenthood.</p>
    `,
    author: 'Dr. Lisa Thompson',
    authorTitle: 'Fertility Specialist & Patient Advocate',
    date: 'Oct 02, 2025',
    readTime: '7 min read',
    views: '11.2K',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    relatedArticles: [
      {
        title: 'Heart Surgery Abroad: Cost Comparison and Quality Insights',
        description: 'Detailed analysis of heart surgery costs and quality standards across top medical tourism destinations including India, Thailand, and Singapore.',
        category: 'Cardiology',
        readTime: '6 min read',
      },
      {
        title: 'Dental Tourism: Transform Your Smile While Saving Money',
        description: 'How to get world-class dental treatments at a fraction of home country costs. Compare destinations, procedures, and recovery timelines.',
        category: 'Dentistry',
        readTime: '5 min read',
      },
      {
        title: 'Recovery and Aftercare: Your Medical Tourism Journey',
        description: 'Essential tips for post-operative care, follow-up appointments, and ensuring the best outcomes from your medical tourism experience.',
        category: 'Recovery',
        readTime: '6 min read',
      },
      {
        title: 'Medical Tourism Insurance: Protecting Your Investment',
        description: 'Understanding medical tourism insurance options, what\'s covered, and how to choose the right policy for international medical treatments.',
        category: 'Insurance',
        readTime: '4 min read',
      },
    ],
  },
  {
    id: '4',
    category: 'Recovery',
    title: 'Recovery and Aftercare: Your Medical Tourism Journey',
    description: 'Essential tips for post-operative care, follow-up appointments, and ensuring the best outcomes from your medical tourism experience.',
    fullContent: `
      <h2>Understanding Recovery in Medical Tourism</h2>
      <p>Recovery is a crucial phase after surgery abroad. With proper planning, you can heal comfortably while enjoying your destination. This guide covers timelines, tips, and support.</p>

      <h2>Post-Op Care Essentials</h2>
      <ul>
        <li><strong>Immediate Aftercare:</strong> Follow surgeon instructions for wound care, medications, and mobility. Most procedures allow light travel within 1-2 weeks.</li>
        <li><strong>Nutrition and Rest:</strong> Hydrate, eat anti-inflammatory foods, and rest in recovery-friendly hotels near clinics.</li>
        <li><strong>Follow-Ups:</strong> Virtual check-ins via telehealth bridge gaps until home consultations.</li>
      </ul>

      <h2>Destination-Specific Recovery</h2>
      <p>India offers ayurvedic wellness; Thailand, spa retreats; Turkey, coastal relaxation. Packages often include physiotherapy and nutritionists.</p>

      <h2>Common Challenges and Solutions</h2>
      <p>Jet lag and pain management: Use apps for tracking and local pharmacies. Travel insurance covers complications.</p>

      <h2>Conclusion</h2>
      <p>Thoughtful recovery planning ensures lasting results. Embrace the journey for holistic healing.</p>
    `,
    author: 'Dr. James Wilson',
    authorTitle: 'Rehabilitation Expert & Travel Medicine Physician',
    date: 'Sep 20, 2025',
    readTime: '6 min read',
    views: '8.9K',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    relatedArticles: [
      {
        title: 'Heart Surgery Abroad: Cost Comparison and Quality Insights',
        description: 'Detailed analysis of heart surgery costs and quality standards across top medical tourism destinations including India, Thailand, and Singapore.',
        category: 'Cardiology',
        readTime: '6 min read',
      },
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
        title: 'Medical Tourism Insurance: Protecting Your Investment',
        description: 'Understanding medical tourism insurance options, what\'s covered, and how to choose the right policy for international medical treatments.',
        category: 'Insurance',
        readTime: '4 min read',
      },
    ],
  },
  {
    id: '5',
    category: 'Insurance',
    title: 'Medical Tourism Insurance: Protecting Your Investment',
    description: 'Understanding medical tourism insurance options, what\'s covered, and how to choose the right policy for international medical treatments.',
    fullContent: `
      <h2>Why Insurance Matters in Medical Tourism</h2>
      <p>While treatments abroad save money, unexpected issues like complications or trip cancellations can add costs. Specialized insurance provides peace of mind.</p>

      <h2>Key Coverage Types</h2>
      <ul>
        <li><strong>Medical Coverage:</strong> Up to $1M for complications, including follow-up care and evacuation ($50–$200 premium).</li>
        <li><strong>Trip Protection:</strong> Reimburses non-refundable bookings if delayed or canceled ($20–$100).</li>
        <li><strong>Pre-Existing Conditions:</strong> Waivers available for planned treatments.</li>
      </ul>

      <h2>Top Providers and Tips</h2>
      <p>Companies like Allianz and IMG offer tailored plans. Compare deductibles and exclusions; buy early for full coverage.</p>

      <h2>Real-World Examples</h2>
      <p>A delayed flight covered by insurance saved a patient $2,000 in rescheduling fees. Always read fine print.</p>

      <h2>Conclusion</h2>
      <p>Invest in insurance to safeguard your health journey abroad. It's the smart layer of protection.</p>
    `,
    author: 'Sarah Johnson',
    authorTitle: 'Insurance Advisor & Healthcare Analyst',
    date: 'Oct 04, 2025',
    readTime: '4 min read',
    views: '7.3K',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    relatedArticles: [
      {
        title: 'Heart Surgery Abroad: Cost Comparison and Quality Insights',
        description: 'Detailed analysis of heart surgery costs and quality standards across top medical tourism destinations including India, Thailand, and Singapore.',
        category: 'Cardiology',
        readTime: '6 min read',
      },
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
  },
];

const Read = () => {
  const { id } = useParams<{ id: string }>();
  const article = mockArticles.find(a => a.id === id) || mockArticles[0];

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
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
                <AvatarFallback>{article.author.charAt(0)}${article.author.charAt(article.author.indexOf(' ') + 1)}</AvatarFallback>
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
        {/* <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
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
        </Card> */}
      </div>
    </div>
  );
};

export default Read;