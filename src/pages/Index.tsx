
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Bookmark, User, LogIn } from "lucide-react";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogCard } from "@/components/BlogCard";

const Index = () => {
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Minimalist Living: Finding Beauty in Simplicity",
      excerpt: "Discover how embracing minimalism can transform your life and create space for what truly matters...",
      author: "Emma Chen",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Lifestyle",
      tags: ["minimalism", "lifestyle", "wellness"],
      comments: 12,
      likes: 89,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Cooking: From Garden to Table",
      excerpt: "Learn how to create delicious meals while reducing your environmental impact through sustainable cooking practices...",
      author: "Chef Marcus",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Food & Nutrition",
      tags: ["sustainable", "cooking", "environment"],
      comments: 8,
      likes: 156,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Digital Wellness: Finding Balance in a Connected World",
      excerpt: "Explore strategies for maintaining mental health and well-being in our increasingly digital landscape...",
      author: "Dr. Sarah Kim",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Technology & Wellness",
      tags: ["digital wellness", "mental health", "technology"],
      comments: 15,
      likes: 203,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "The Renaissance of Handmade Crafts in Modern Times",
      excerpt: "Why traditional crafts are making a comeback and how they're finding new relevance in our digital age...",
      author: "Isabella Torres",
      date: "March 8, 2024",
      readTime: "8 min read",
      category: "Arts & Crafts",
      tags: ["crafts", "handmade", "tradition"],
      comments: 6,
      likes: 78,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Urban Gardening: Growing Green in Small Spaces",
      excerpt: "Transform your small apartment into a thriving garden oasis with these creative urban gardening techniques...",
      author: "Green Thumb Lisa",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Gardening",
      tags: ["urban gardening", "plants", "small spaces"],
      comments: 9,
      likes: 134,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Travel Photography: Capturing Moments That Matter",
      excerpt: "Master the art of travel photography and learn how to tell compelling stories through your lens...",
      author: "Adventure Alex",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "Photography & Travel",
      tags: ["photography", "travel", "storytelling"],
      comments: 11,
      likes: 187,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=400&fit=crop"
    }
  ];

  const handleSavePost = (postId: number) => {
    setSavedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative">
      {/* Floral Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm15 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <BlogHeader />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-emerald-600">FloralBlog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover inspiring stories, creative ideas, and thoughtful perspectives across lifestyle, technology, arts, and more.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              isSaved={savedPosts.includes(post.id)}
              onSave={() => handleSavePost(post.id)}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
            Load More Posts
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
