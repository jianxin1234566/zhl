import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 pointer-events-none"></div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-extrabold mb-3 tracking-wider text-[#FF4655] drop-shadow-[0_2px_8px_rgba(255,70,85,0.7)]">{title}</h3>
        <p className="text-slate-200 text-base mb-4 h-20 overflow-y-auto flex-grow font-semibold tracking-wide">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-[#1A232E] border border-[#FF4655] text-[#FF4655] text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
          <div className="inline-block btn bg-[#FF4655] text-white px-6 py-2 rounded-lg font-extrabold text-base shadow-lg hover:bg-white hover:text-[#FF4655] transition-all duration-200 cursor-pointer select-none">
            查看练习 &rarr;
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group card-glow bg-[#1A232E] rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_32px_#FF4655]">
      {link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
          {cardContent}
        </Link>
      ) : (
        <div className="flex flex-col h-full">{cardContent}</div>
      )}
    </div>
  );
} 