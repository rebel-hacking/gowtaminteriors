import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';
import { ProjectItem } from '../data/studioData';

interface HorizontalGalleryProps {
  title: string;
  subtitle?: string;
  categoryTag?: string;
  items: ProjectItem[];
  bgClass?: string;
  isDarkTheme?: boolean;
  onOpenConsultation: (topic?: string) => void;
}

export const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({
  title,
  subtitle,
  categoryTag = 'FEATURED PORTFOLIO',
  items,
  bgClass = 'bg-[#F8F7F3] text-charcoal',
  isDarkTheme = false,
  onOpenConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to update arrow disabled states
  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [items]);

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsMouseDown(true);
    setIsDragged(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftState(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.3;
    if (Math.abs(walk) > 4) {
      setIsDragged(true);
    }
    containerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent accidental link navigation if user dragged
    if (isDragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const scrollBy = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className={`section-spacing ${bgClass} transition-colors duration-400 overflow-hidden`}>
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with Title and Arrow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="type-caption text-gold block mb-2">{categoryTag}</span>
            <h2 className={`type-headline-lg tracking-tight max-w-xl ${isDarkTheme ? 'text-[#F8F7F3]' : 'text-charcoal'}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`type-body-sm mt-2 max-w-lg leading-relaxed ${isDarkTheme ? 'text-[#C9C9C1]' : 'text-[#85847E]'}`}>
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Visual hint for dragging */}
            <span className={`hidden xl:inline-flex items-center gap-1.5 type-caption ${isDarkTheme ? 'text-[#C9C9C1]' : 'text-[#85847E]'}`}>
              <MoveHorizontal className="w-3.5 h-3.5 text-gold" />
              <span>DRAG OR SWIPE HORIZONTALLY</span>
            </span>

            {/* Manual Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollBy(-420)}
                disabled={!canScrollLeft}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-150 disabled:opacity-30 disabled:pointer-events-none ${
                  isDarkTheme
                    ? 'border border-white/20 text-[#F8F7F3] hover:bg-white hover:text-charcoal'
                    : 'border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white'
                }`}
                aria-label="Previous portfolio project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(420)}
                disabled={!canScrollRight}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-150 disabled:opacity-30 disabled:pointer-events-none ${
                  isDarkTheme
                    ? 'border border-white/20 text-[#F8F7F3] hover:bg-white hover:text-charcoal'
                    : 'border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white'
                }`}
                aria-label="Next portfolio project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Manual Drag & Scroll Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x select-none ${
            isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
          } -mx-4 px-4 sm:mx-0 sm:px-0`}
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: isMouseDown ? 'auto' : 'smooth',
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`w-[300px] sm:w-[380px] lg:w-[420px] shrink-0 snap-start flex flex-col shadow-soft hover:shadow-card transition-shadow duration-300 ${
                isDarkTheme
                  ? 'bg-[#171715] border border-white/15 text-[#F8F7F3]'
                  : 'bg-white border border-charcoal/10 text-charcoal'
              }`}
            >
              {/* Separate Image Container - No text over image */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-charcoal/5">
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-luxury hover:scale-105 pointer-events-none"
                />
                <div className="absolute top-4 left-4 bg-charcoal/90 text-gold type-caption px-3 py-1 text-[10px] tracking-wider uppercase">
                  {item.category}
                </div>
                <div className={`absolute bottom-4 right-4 type-caption px-2 py-0.5 text-[10px] ${
                  isDarkTheme ? 'bg-deep-black/90 text-gold' : 'bg-white/90 text-charcoal'
                }`}>
                  0{index + 1} / 0{items.length}
                </div>
              </div>

              {/* Separate Content Container Below Image */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className={`flex items-center justify-between text-xs mb-2 ${
                    isDarkTheme ? 'text-[#C9C9C1]' : 'text-[#85847E]'
                  }`}>
                    <span>{item.location}</span>
                    <span>{item.area}</span>
                  </div>
                  <h3 className={`type-headline-sm mb-2 line-clamp-1 ${
                    isDarkTheme ? 'text-[#F8F7F3]' : 'text-charcoal'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`type-body-sm line-clamp-2 mb-4 leading-relaxed ${
                    isDarkTheme ? 'text-[#C9C9C1]' : 'text-[#85847E]'
                  }`}>
                    {item.summary}
                  </p>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between ${
                  isDarkTheme ? 'border-white/15' : 'border-charcoal/10'
                }`}>
                  <Link
                    to={`/projects/${item.id}`}
                    onClick={handleCardClick}
                    className={`type-label-sm inline-flex items-center gap-1 transition-colors font-medium ${
                      isDarkTheme ? 'text-[#F8F7F3] hover:text-gold' : 'text-charcoal hover:text-gold'
                    }`}
                  >
                    <span>EXPLORE PROJECT</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => {
                      if (isDragged) {
                        e.preventDefault();
                        return;
                      }
                      onOpenConsultation(`Inquiry for ${item.title}`);
                    }}
                    className="type-caption text-gold hover:underline transition-colors font-medium text-xs"
                  >
                    DISCUSS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer indication */}
        <div className={`mt-4 flex items-center justify-between text-xs ${
          isDarkTheme ? 'text-[#C9C9C1]' : 'text-[#85847E]'
        }`}>
          <span className="flex items-center gap-1.5">
            <MoveHorizontal className="w-3.5 h-3.5 text-gold" />
            <span>Use trackpad, swipe, drag or arrows to explore projects</span>
          </span>
          <span className="hidden sm:inline">
            46, Vijaya Bank Layout, Bengaluru · 4.9/5 Rating
          </span>
        </div>
      </div>
    </section>
  );
};
