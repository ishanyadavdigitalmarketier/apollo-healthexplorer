import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import articleImage from '@/assets/article-medical-tourism.jpg';

const Article = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with expert insights on medical tourism and global healthcare trends.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl">
          <div className="relative overflow-hidden">
            <img 
              src={articleImage} 
              alt="Medical Tourism Guide"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <CardHeader className="pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              Complete Guide to Medical Tourism: What You Need to Know
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about getting medical treatment abroad, from choosing the right hospital to post-operative care and recovery.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-0">
            {/* Meta Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Dr. Sarah Williams</p>
                  <p className="text-sm text-muted-foreground">Cardiologist & Medical Tourism Expert</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Mar 15, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                Medical tourism has become a popular choice for patients seeking high-quality healthcare at more affordable prices. Whether you're considering a routine procedure or complex surgery, traveling abroad for treatment can offer significant savings without compromising on care.
              </p>
              <p>
                In this comprehensive guide, we'll walk you through every step of the process—from researching destinations and selecting accredited facilities to understanding visa requirements, travel logistics, and ensuring a smooth recovery back home.
              </p>
            </div>

            {/* CTA */}
            <div className="flex justify-end">
              <Button asChild size="lg" className="group">
                <a href="/articles/medical-tourism-guide" className="flex items-center gap-2 group-hover:underline">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* More Articles Teaser */}
        <div className="text-center mt-12">
          <Button variant="outline" className="gap-2">
            <Clock className="w-4 h-4" />
            Explore More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Article;