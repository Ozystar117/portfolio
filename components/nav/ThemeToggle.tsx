"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const HINT_KEY = "theme-hint-seen";

function subscribe() {
  return () => {};
}

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const [showHint, setShowHint] = useState(false);

  const dismissHint = useCallback(() => {
    setShowHint(false);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(HINT_KEY, "1");
      } catch {
        /* ignore quota / private mode */
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(HINT_KEY)) return;
      if (window.localStorage.getItem("theme")) return;
    } catch {
      return;
    }

    const showTimer = window.setTimeout(() => setShowHint(true), 1500);
    const autoDismiss = window.setTimeout(() => dismissHint(), 6500);
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismissHint();
    };
    window.addEventListener("keydown", onEsc);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(autoDismiss);
      window.removeEventListener("keydown", onEsc);
    };
  }, [mounted, dismissHint]);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="border-border bg-card text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/40 size-9 rounded-full transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="size-4 opacity-0" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="border-border bg-card text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/40 size-9 rounded-full transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => {
                if (showHint) dismissHint();
                setTheme(isDark ? "light" : "dark");
              }}
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          }
        />
        <TooltipContent side="bottom" sideOffset={8}>
          {isDark ? "Switch to light mode" : "Switch to dark mode"}
        </TooltipContent>
      </Tooltip>

      <AnimatePresence>
        {showHint ? (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-card border-primary/40 text-foreground absolute top-full right-0 z-50 mt-2 w-max max-w-[14rem] rounded-xl border px-3 py-2 text-xs shadow-lg shadow-primary/10"
          >
            <div className="flex items-start gap-2">
              <span className="bg-primary mt-1 inline-block size-1.5 shrink-0 rounded-full" />
              <span className="leading-snug">Prefer light mode? Tap here.</span>
              <button
                type="button"
                onClick={dismissHint}
                aria-label="Dismiss hint"
                className="text-muted-foreground hover:text-foreground -mr-1 -mt-0.5 ml-1 rounded-full p-0.5 transition-colors"
              >
                <X className="size-3" />
              </button>
            </div>
            <span
              aria-hidden
              className="bg-card border-primary/40 absolute -top-1 right-3 size-2 rotate-45 border-t border-l"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
