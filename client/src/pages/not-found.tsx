import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function NotFound() {
  // Update document title for SEO
  useEffect(() => {
    document.title = "Page Not Found | Troubleshooter";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "The page you are looking for cannot be found. Return to Troubleshooter's homepage for IT services and solutions.");
    }
    
    // Return to original title when component unmounts
    return () => {
      document.title = "Troubleshooter | Professional IT Services & Solutions";
      if (metaDescription) {
        metaDescription.setAttribute("content", "Troubleshooter delivers expert IT services with racing-inspired speed and precision. Specializing in network solutions, cloud services, and tech support for businesses.");
      }
    };
  }, []);
  
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center bg-slate-50 py-16">
      <Card className="w-full max-w-md mx-4 border-t-4 border-primary shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-16 w-16 text-primary mb-4" />
            <h1 className="text-3xl font-bold text-secondary">404</h1>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">Page Not Found</h2>
          </div>

          <p className="mt-4 text-gray-600 text-center mb-6">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="bg-primary hover:bg-red-700">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
