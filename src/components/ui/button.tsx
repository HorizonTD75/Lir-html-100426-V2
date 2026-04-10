import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base sm:text-lg font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline font-semibold",
        // Custom variants for LirElia
        hero: "bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:shadow-xl hover:-translate-y-1 text-lg sm:text-xl px-6 sm:px-10 py-4 sm:py-5",
        heroOutline: "border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-lg sm:text-xl px-6 sm:px-10 py-4 sm:py-5",
        accent: "bg-accent text-accent-foreground shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5",
        card: "bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary",
      },
      size: {
        default: "h-12 sm:h-14 px-4 sm:px-6 py-2 sm:py-3",
        sm: "h-10 sm:h-11 px-3 sm:px-4 text-sm sm:text-base",
        lg: "h-14 sm:h-16 px-6 sm:px-8 text-lg sm:text-xl",
        xl: "h-16 sm:h-18 px-8 sm:px-10 text-lg sm:text-xl",
        icon: "h-12 w-12 sm:h-14 sm:w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
