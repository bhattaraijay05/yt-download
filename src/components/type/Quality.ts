export type Quality = {
  mimeType: string;
  qualityLabel: string;
  bitrate: number;
  audioBitrate: number;
  itag: number;
  width: number;
  height: number;
  lastModified: string;
  contentLength: string;
  quality: string;
  fps: number;
  projectionType: string;
  averageBitrate: number;
  audioQuality: string;
  approxDurationMs: string;
  audioSampleRate: string;
  audioChannels: number;
  url: string;
  hasVideo: boolean;
  hasAudio: boolean;
  container: string;
  codecs: string;
  videoCodec: string;
  audioCodec: string;
  isLive: boolean;
  isHLS: boolean;
  isDashMPD: boolean;
};
