
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  comments: number;
  likes: number;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
  isSaved: boolean;
  onSave: () => void;
}

export const BlogCard = ({ post, isSaved, onSave }: BlogCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSave}
              className={`bg-white/80 backdrop-blur-sm hover:bg-white ${
                isSaved ? 'text-emerald-600' : 'text-gray-600'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
            </Button>
          </div>
          <div className="absolute top-3 left-3">
            <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">
              {post.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors cursor-pointer">
            {post.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">{post.date} • {post.readTime}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`p-0 h-auto ${isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
              >
                <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm">{likeCount}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-auto text-gray-500 hover:text-emerald-600"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="text-sm">{post.comments}</span>
              </Button>
            </div>
            
            <Button 
              size="sm" 
              variant="outline"
              className="hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700"
            >
              Read More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
