// Placeholder for TypeScript interfaces
export interface CardProps {
    title: string;
    content: string;
  }
  
export interface ButtonProps {
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () => void;
    children: React.ReactNode;
  }
  
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}
