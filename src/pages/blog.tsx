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
      id: '1',
      title: 'Top Apollo Hospitals for Cardiac Care in India',
      slug: 'apollo-hospitals-cardiac-care-india',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo Hospitals Cardiac Care',
      categories: ['Hospitals', 'Cardiology', 'Medical Tourism']
    },
    {
      id: '2',
      title: 'Why Choose Apollo Hospitals for Neurology Treatments Abroad',
      slug: 'apollo-hospitals-neurology-abroad',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo Hospitals Neurology',
      categories: ['Hospitals', 'Neurology', 'Medical Tourism']
    },
    {
      id: '3',
      title: 'Apollo Pediatric Centers: Excellence in Child Healthcare',
      slug: 'apollo-pediatric-centers-child-healthcare',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo Pediatric Centers',
      categories: ['Hospitals', 'Pediatrics', 'Family Health']
    },
    {
      id: '4',
      title: 'Dermatology Excellence at Apollo South Hospital',
      slug: 'dermatology-apollo-south-hospital',
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo South Hospital Dermatology',
      categories: ['Hospitals', 'Dermatology', 'Skin Care']
    },
    {
      id: '5',
      title: 'Apollo Central Hospital: A Hub for Multi-Specialty Care',
      slug: 'apollo-central-hospital-multi-specialty',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbdcd8aa2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo Central Hospital',
      categories: ['Hospitals', 'Multi-Specialty', 'Innovation']
    },
    {
      id: '6',
      title: 'Orthopedic Advancements at Apollo West Facilities',
      slug: 'orthopedic-apollo-west-facilities',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo West Orthopedics',
      categories: ['Hospitals', 'Orthopedics', 'Surgery']
    },
    {
      id: '7',
      title: 'Oncology Services in Apollo Network Hospitals',
      slug: 'oncology-apollo-network-hospitals',
      image: 'https://images.unsplash.com/photo-1585435557344-62dc330c3de3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo Oncology Services',
      categories: ['Hospitals', 'Oncology', 'Cancer Care']
    },
    {
      id: '8',
      title: 'Patient Stories from Apollo Hospitals Worldwide',
      slug: 'patient-stories-apollo-hospitals',
      image: 'https://images.unsplash.com/photo-1603398937357-fccaa4b4e8cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Patient Stories Apollo',
      categories: ['Hospitals', 'Testimonials', 'Medical Tourism']
    },
    {
      id: '9',
      title: 'Emergency Care Excellence at Apollo Emergency Wings',
      slug: 'emergency-care-apollo-wings',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo Emergency Care',
      categories: ['Hospitals', 'Emergency', '24/7 Care']
    },
    {
      id: '10',
      title: 'Apollo Hospitals: Leading in Robotic Surgery',
      slug: 'apollo-hospitals-robotic-surgery',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Apollo Robotic Surgery',
      categories: ['Hospitals', 'Technology', 'Surgery']
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
            <h1 className="text-3xl font-bold text-primary mb-4">Apollo Partners Blog</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover insights on medical tourism, hospital excellence, and health tips from Apollo Partners. Explore our network of world-class hospitals and expert care.
            </p>
            <h2 className="text-xl font-semibold mb-4">Featured Hospital Stories & Insights</h2>
          </header>

          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 pointer-events-none" />
              <Input
                type="search"
                placeholder="Search hospital insights..."
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