import { useEffect, useRef, useState } from "react";
import { GalleryCategory } from "../types";

/* =====================================================
   LOCAL GALLERY IMAGES
   Vite automatically loads images from these folders.
===================================================== */

const galleryImages = import.meta.glob(
  "../assets/gallery/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

/* =====================================================
   IMAGE HELPER
===================================================== */

function getImagesForCategory(category: GalleryCategory): string[] {
  const categoryPath = `/gallery/${category}/`;

  return Object.entries(galleryImages)
    .filter(([path]) => path.includes(categoryPath))
    .map(([, image]) => image);
}

/* =====================================================
   ACTIVITIES
===================================================== */

const activities: {
  id: GalleryCategory;
  title: string;
  description: string;
  icon: string;
  activities: string[];
}[] = [
  {
    id: "leaders",
    title: "Church Leaders",
    description:
      "Leadership, ministry and church activities involving our pastors, elders and ministry leaders.",
    icon: "✦",
    activities: [
      "Leadership meetings",
      "Pastoral ministry",
      "Church meetings",
      "Ordination services",
      "Special services",
      "Ministry planning",
    ],
  },

  {
    id: "women",
    title: "Women’s Fellowship",
    description:
      "Moments from our women’s ministry, fellowship, prayer and community activities.",
    icon: "♡",
    activities: [
      "Women’s fellowship",
      "Prayer meetings",
      "Bible study",
      "Women’s conferences",
      "Community outreach",
      "Special celebrations",
    ],
  },

  {
    id: "men",
    title: "Men’s Fellowship",
    description:
      "Fellowship, prayer, Bible study and activities bringing the men of our church together.",
    icon: "◈",
    activities: [
      "Men’s fellowship",
      "Prayer meetings",
      "Bible study",
      "Men’s conferences",
      "Community outreach",
      "Team activities",
    ],
  },

  {
    id: "youth",
    title: "Youth Ministry",
    description:
      "A vibrant collection of youth worship, fellowship, learning and special events.",
    icon: "⌁",
    activities: [
      "Youth worship",
      "Bible study",
      "Youth fellowship",
      "Talent activities",
      "Mentorship",
      "Retreats",
      "Games and sports",
      "Youth conferences",
    ],
  },

  {
    id: "church-school",
    title: "Church School",
    description:
      "Children learning, worshipping and growing together through faith and fellowship.",
    icon: "◇",
    activities: [
      "Sunday school",
      "Bible lessons",
      "Children’s worship",
      "Class activities",
      "Children’s performances",
      "Bible competitions",
      "Special celebrations",
    ],
  },
];

/* =====================================================
   GALLERY COMPONENT
===================================================== */

export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory | null>(null);

  const activeActivity = activities.find(
    (activity) => activity.id === activeCategory
  );

  const modalImages = activeCategory
    ? getImagesForCategory(activeCategory)
    : [];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* =================================================
          SECTION HEADER
      ================================================== */}

      <div className="max-w-2xl">
        <p className="eyebrow">Gallery</p>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy mt-1">
          Church Life
        </h1>

        <p className="mt-3 text-sm sm:text-base text-charcoal/70 leading-relaxed">
          Explore moments from our church family, ministries,
          worship and fellowship.
        </p>
      </div>

      {/* =================================================
          ACTIVITY CARDS
      ================================================== */}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {activities.map((activity) => {
          const images = getImagesForCategory(activity.id);
          const count = images.length;

          return (
            <button
              key={activity.id}
              type="button"
              disabled={count === 0}
              onClick={() => {
                if (count > 0) {
                  setActiveCategory(activity.id);
                }
              }}
              className={`
                group
                relative
                text-left
                overflow-hidden
                rounded-2xl
                border
                bg-cream
                min-h-[250px]
                transition-all
                duration-300
                ${
                  count === 0
                    ? `
                      border-navy/10
                      opacity-60
                      cursor-not-allowed
                    `
                    : `
                      border-navy/10
                      hover:-translate-y-1
                      hover:shadow-xl
                      hover:border-gold/50
                      cursor-pointer
                    `
                }
              `}
            >
              {/* =================================================
                  CARD BACKGROUND IMAGE
              ================================================== */}

              {images.length > 0 && (
                <img
                  src={images[0]}
                  alt={activity.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    opacity-10
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:opacity-20
                  "
                />
              )}

              {/* =================================================
                  CARD OVERLAY
              ================================================== */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-cream
                  via-cream/95
                  to-gold/5
                "
              />

              {/* =================================================
                  DECORATIVE CIRCLE
              ================================================== */}

              <div
                className="
                  absolute
                  -right-12
                  -top-12
                  w-36
                  h-36
                  rounded-full
                  bg-gold/10
                  transition-transform
                  duration-500
                  group-hover:scale-150
                "
              />

              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <div className="relative p-6">
                {/* Icon */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-xl
                    bg-navy
                    text-gold
                    text-xl
                    font-semibold
                    mb-6
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  {activity.icon}
                </div>

                {/* Title */}

                <h2
                  className="
                    font-display
                    text-xl
                    font-semibold
                    text-navy
                  "
                >
                  {activity.title}
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-charcoal/65
                    max-w-sm
                  "
                >
                  {activity.description}
                </p>

                {/* Activity Tags */}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {activity.activities.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="
                        text-[10px]
                        px-2
                        py-1
                        rounded-full
                        bg-navy/5
                        text-navy/60
                      "
                    >
                      {item}
                    </span>
                  ))}

                  {activity.activities.length > 3 && (
                    <span
                      className="
                        text-[10px]
                        px-2
                        py-1
                        rounded-full
                        bg-gold/10
                        text-gold-dark
                      "
                    >
                      +{activity.activities.length - 3} more
                    </span>
                  )}
                </div>

                {/* Bottom */}

                <div
                  className="
                    mt-6
                    pt-4
                    border-t
                    border-navy/10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span className="text-xs text-navy/50">
                    {count > 0
                      ? `${count} ${
                          count === 1 ? "photo" : "photos"
                        }`
                      : "Coming soon"}
                  </span>

                  {count > 0 && (
                    <span
                      className="
                        text-sm
                        font-medium
                        text-gold-dark
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      View gallery →
                    </span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* =================================================
          MODAL
      ================================================== */}

      {activeActivity && (
        <GalleryModal
          title={activeActivity.title}
          description={activeActivity.description}
          activities={activeActivity.activities}
          images={modalImages}
          onClose={() => setActiveCategory(null)}
        />
      )}
    </section>
  );
}

/* =====================================================
   GALLERY MODAL
===================================================== */

function GalleryModal({
  title,
  description,
  activities,
  images,
  onClose,
}: {
  title: string;
  description: string;
  activities: string[];
  images: string[];
  onClose: () => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [paused, setPaused] = useState(false);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  /* =================================================
     AUTO SCROLL
  ================================================== */

  useEffect(() => {
    const element = scrollerRef.current;

    if (!element || images.length <= 1) {
      return;
    }

    let frame: number;

    const scroll = () => {
      if (!paused && element) {
        element.scrollLeft += 0.6;

        if (
          element.scrollLeft + element.clientWidth >=
          element.scrollWidth - 1
        ) {
          element.scrollLeft = 0;
        }
      }

      frame = requestAnimationFrame(scroll);
    };

    frame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [paused, images.length]);

  /* =================================================
     ESCAPE KEY
  ================================================== */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose, selectedImage]);

  /* =================================================
     PREVENT BACKGROUND SCROLL
  ================================================== */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  return (
    <>
      {/* =================================================
          MAIN MODAL
      ================================================== */}

      <div
        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-navy/75
          backdrop-blur-sm
          px-4
          py-6
        "
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} gallery`}
      >
        <div
          className="
            relative
            w-full
            max-w-5xl
            max-h-[90vh]
            bg-cream
            rounded-2xl
            shadow-2xl
            overflow-hidden
          "
          onClick={(event) =>
            event.stopPropagation()
          }
        >
          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              flex
              items-start
              justify-between
              gap-6
              px-6
              py-5
              border-b
              border-navy/10
            "
          >
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-gold-dark
                "
              >
                Church Gallery
              </p>

              <h2
                className="
                  font-display
                  text-2xl
                  sm:text-3xl
                  font-semibold
                  text-navy
                  mt-1
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-charcoal/60
                  max-w-2xl
                "
              >
                {description}
              </p>
            </div>

            {/* Close */}

            <button
              type="button"
              onClick={onClose}
              className="
                shrink-0
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                text-navy/60
                hover:text-navy
                hover:bg-navy/5
                transition-colors
              "
              aria-label="Close gallery"
            >
              <span className="text-2xl leading-none">
                &times;
              </span>
            </button>
          </div>

          {/* =================================================
              ACTIVITY TAGS
          ================================================== */}

          <div className="px-6 pt-5">
            <div className="flex flex-wrap gap-2">
              {activities.map((activity) => (
                <span
                  key={activity}
                  className="
                    text-xs
                    px-3
                    py-1.5
                    rounded-full
                    bg-navy/5
                    text-navy/60
                  "
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              IMAGE GALLERY
          ================================================== */}

          {images.length === 0 ? (
            <div
              className="
                px-6
                py-16
                text-center
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  mx-auto
                  rounded-full
                  bg-gold/10
                  text-gold-dark
                  text-2xl
                "
              >
                ◇
              </div>

              <h3
                className="
                  font-display
                  text-lg
                  font-semibold
                  text-navy
                  mt-5
                "
              >
                No photos yet
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-charcoal/60
                "
              >
                Photos from this ministry will
                appear here.
              </p>
            </div>
          ) : (
            <div
              ref={scrollerRef}
              onMouseEnter={() =>
                setPaused(true)
              }
              onMouseLeave={() =>
                setPaused(false)
              }
              onTouchStart={() =>
                setPaused(true)
              }
              onTouchEnd={() =>
                setPaused(false)
              }
              className="
                mt-5
                flex
                gap-4
                overflow-x-auto
                px-6
                pb-6
                scroll-smooth
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() =>
                    setSelectedImage(image)
                  }
                  className="
                    shrink-0
                    w-64
                    sm:w-72
                    h-80
                    sm:h-96
                    rounded-xl
                    overflow-hidden
                    shadow-md
                    relative
                    group
                    bg-navy/5
                    cursor-zoom-in
                  "
                >
                  <img
                    src={image}
                    alt={`${title} photo ${index + 1}`}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Hover overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-navy/0
                      group-hover:bg-navy/20
                      transition-colors
                      duration-300
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-3
                      right-3
                      w-9
                      h-9
                      rounded-full
                      bg-cream/90
                      text-navy
                      flex
                      items-center
                      justify-center
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                    "
                  >
                    +
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* =================================================
              FOOTER
          ================================================== */}

          {images.length > 1 && (
            <div
              className="
                px-6
                pb-5
                text-xs
                text-charcoal/50
                text-center
              "
            >
              Hover or touch the gallery to pause
              scrolling • Click a photo to enlarge
            </div>
          )}
        </div>
      </div>

      {/* =================================================
          FULL IMAGE PREVIEW
      ================================================== */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[60]
            flex
            items-center
            justify-center
            bg-black/90
            p-4
          "
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <button
            type="button"
            onClick={() =>
              setSelectedImage(null)
            }
            className="
              absolute
              top-5
              right-5
              z-10
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              bg-cream/10
              text-cream
              hover:bg-cream/20
              transition-colors
            "
            aria-label="Close image"
          >
            &times;
          </button>

          <img
            src={selectedImage}
            alt={title}
            className="
              max-w-full
              max-h-[90vh]
              object-contain
              rounded-lg
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          />
        </div>
      )}
    </>
  );
}