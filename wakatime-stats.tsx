import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "Server Error";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <p className="text-lg font-bold text-[#FF4655] tracking-wider">总编码时长: <span className="font-extrabold text-white drop-shadow-[0_2px_8px_rgba(255,70,85,0.7)]">{stats}</span></p>
    );
}

export default function WakaTimeStats() {
  return (
    <footer className="bg-[#1A232E] border-t-2 border-[#FF4655] text-slate-300 text-center p-8 mt-auto w-full z-10 shadow-[0_-2px_24px_#FF4655]/30">
      <div className="mb-2 text-base font-bold tracking-widest">&copy; {new Date().getFullYear()} 电竞作业平台</div>
      <div className="mx-auto w-24 h-1 bg-gradient-to-r from-[#FF4655] via-[#fff2] to-[#FF4655] rounded-full my-4 shadow-[0_0_8px_#FF4655]" />
      <Suspense fallback={<p className="text-[#FF4655] font-bold">正在加载编码时长...</p>}>
        <WakaTimeData />
      </Suspense>
    </footer>
  );
} 