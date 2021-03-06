export interface IPlaylistItem {
  id: string;
  title: string;
  endTime: number;
  startTime: number;
  src: string;
  image: string;
  tags: string[];
}

export interface IPlaylistItemOptional {
  id?: string;
  title?: string;
  endTime?: number;
  startTime?: number;
  src?: string;
  image?: string;
  tags?: string[];
}
