"use client";

import { useEffect, useId, useRef } from "react";
import { ChevronDown } from "lucide-react";

import type { HeaderNavParent } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  parent: HeaderNavParent;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

/**
 * A single top-level dropdown in the desktop header. Click/keyboard driven
 * (not hover-only) — Enter/Space/ArrowDown opens and moves focus in,
 * Escape closes and returns focus to the trigger, Arrow Down/Up move
 * between items. Only one dropdown is open at a time, controlled by the
 * parent (SiteHeader) via isOpen/onOpen/onClose.
 */
export function NavDropdown({ parent, isOpen, onOpen, onClose }: NavDropdownProps) {
  const panelId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const isPlaceholder = parent.items.length === 0;

  useEffect(() => {
    if (!isOpen) return;

    function onDocumentClick(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) onClose();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  function handleTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!isOpen) onOpen();
      window.setTimeout(() => itemRefs.current[0]?.focus(), 0);
    }
  }

  function handleItemKeyDown(event: React.KeyboardEvent<HTMLAnchorElement>, index: number) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      itemRefs.current[Math.min(index + 1, parent.items.length - 1)]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (index === 0) {
        triggerRef.current?.focus();
      } else {
        itemRefs.current[index - 1]?.focus();
      }
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onKeyDown={handleTriggerKeyDown}
        className={cn(
          "flex items-center gap-1 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-background/80 transition-colors hover:text-gold-luxury",
          isOpen && "text-gold-luxury",
        )}
      >
        {parent.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden="true" />
      </button>

      {isOpen ? (
        <div
          id={panelId}
          role="menu"
          aria-label={parent.label}
          className="absolute left-1/2 top-full z-50 mt-4 min-w-56 -translate-x-1/2 rounded-sm border border-background/10 bg-ink/95 p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur"
        >
          {isPlaceholder ? (
            <p className="px-3 py-2 text-sm text-background/50">Content coming soon.</p>
          ) : (
            parent.items.map((item, index) => (
              <a
                key={item.href}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                href={item.href}
                role="menuitem"
                onClick={onClose}
                onKeyDown={(event) => handleItemKeyDown(event, index)}
                className="block whitespace-nowrap rounded-sm px-3 py-2 text-sm text-background/75 transition-colors hover:bg-background/10 hover:text-gold-luxury"
              >
                {item.label}
              </a>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
