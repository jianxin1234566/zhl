import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F1923] text-white items-center overflow-hidden relative">
      {/* 电竞风点阵背景已在全局样式 */}
      <main className="flex-grow container mx-auto px-4 py-16 pt-20 w-full z-10">
        <header className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-widest mb-6 text-[#FF4655] drop-shadow-[0_4px_24px_rgba(255,70,85,0.7)] select-none">
            电竞作业平台
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto tracking-wide font-semibold mb-2">
            探索学习的前沿，见证技术的演进。
          </p>
          <div className="mx-auto w-32 h-1 bg-gradient-to-r from-[#FF4655] via-[#fff2] to-[#FF4655] rounded-full my-6 shadow-[0_0_16px_#FF4655]" />
        </header>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>
      <WakaTimeStats />
    </div>
  );
}
