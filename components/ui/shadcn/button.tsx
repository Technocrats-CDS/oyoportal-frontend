import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"btn inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default: "btn--brand",
				destructive:
					"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
				outline:
					"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost:
					"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "btn--size-default",
				xs: "btn--size-xs",
				sm: "btn--size-sm",
				lg: "btn--size-lg",
				icon: "btn--size-icon",
				"icon-xs": "btn--size-icon-xs",
				"icon-sm": "btn--size-icon-sm",
				"icon-lg": "btn--size-icon-lg",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot.Root : "button";

	// Ensure buttons outside forms don't accidentally submit by defaulting to type="button"
	const { type, ...rest } = props as ComponentProps<"button">;
	const finalProps: ComponentProps<"button"> = asChild
		? (rest as ComponentProps<"button">)
		: { type: type ?? "button", ...(rest as ComponentProps<"button">) };

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(buttonVariants({ variant, size, className }))}
			{...finalProps}
		/>
	);
}

export { Button, buttonVariants };
