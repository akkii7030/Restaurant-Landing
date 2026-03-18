import { Link } from "wouter";
import { FileX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground p-4">
      <div className="bg-card border border-secondary/20 shadow-2xl max-w-md w-full p-8 text-center rounded-2xl">
        <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <FileX className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-serif font-bold mb-4">404</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="secondary" size="lg" className="w-full">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
