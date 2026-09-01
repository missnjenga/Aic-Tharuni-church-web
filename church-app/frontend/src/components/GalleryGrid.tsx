import { GalleryPhoto } from "../types";
import ImagePlaceholder from "./ImagePlaceholder";

interface GalleryGridProps {
  photos: GalleryPhoto[];
}

/** Groups photos by event so each event's shots stay together. */
function groupByEvent(photos: GalleryPhoto[]) {
  const groups = new Map<string, GalleryPhoto[]>();
  for (const photo of photos) {
    const key = `${photo.eventName}__${photo.eventDate}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(photo);
  }
  return Array.from(groups.entries()).map(([key, items]) => ({
    eventName: items[0].eventName,
    eventDate: items[0].eventDate,
    key,
    items,
  }));
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  const events = groupByEvent(photos);

  if (events.length === 0) {
    return <p className="text-sm text-charcoal/60 py-12 text-center">No photos in this section yet.</p>;
  }

  return (
    <div className="space-y-12">
      {events.map((event) => (
        <div key={event.key}>
          <div className="flex items-baseline justify-between">
            <h3 className="font-display text-xl text-navy">{event.eventName}</h3>
            <time className="text-xs text-charcoal/50" dateTime={event.eventDate}>
              {new Date(event.eventDate).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {event.items.map((photo) => (
              <ImagePlaceholder
                key={photo.id}
                label={photo.caption}
                aspect="square"
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
